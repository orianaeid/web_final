const express = require("express");
const bcrypt = require('bcrypt');
const UserModel = require("../models/UserModel");


// initialize a router that handles the "/user" part of the URL
const router = express.Router();



/**
 * route:       POST /api/user/login
 * description: sign a user into the website
 * access:      PUBLIC
 */
router.post("/login", async (req, resp) => {
  const { email, password } = req.body;


  try {
    // check if the user provided required data before proceeding
    if(!email || !password) throw new Error("400 no data");


    // check if user exists
    const [user] = await UserModel.find({ email });
    if(!user) throw new Error("400 bad data");

    
    // check if user gave the correct password
    const isPassword = bcrypt.compareSync(password, user.password);
    if(!isPassword) throw new Error("400 bad data");

    
    // on successful login, send the user info from the db without password
    resp.json({ 
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      reg_date: user.reg_date,
      role: user.role, 
      bio: user.bio, 
      art_styles: user.art_styles,
      art_types: user.art_types,
    });

  } catch (err) {
    if(err.message === "400 bad data")
      resp.status(400).json(`Incorrect email or password!`);

    else if(err.message === "400 no data")
      resp.status(400).json(`Please provide an email and password to login`);

    else
      resp.status(500).json(`Server error: ${err.message}`);
  }
});



/**
 * route:       POST /api/user/register
 * description: register a user to the website
 * access:      PUBLIC
 */
router.post("/register", async (req, resp) => {
  const { firstname, lastname, email, password, role, bio, artStyles, artTypes } = req.body;


  try {
    // check if the user provided required data before proceeding
    if(!firstname || !lastname || !email || !password || !role)
      throw new Error("400 no data");


    // check if user exists
    const [user] = await UserModel.find({ email });
    if(user) throw new Error("409 exists");

    // hash the password on 10 rounds of salting
    const hashedPass = bcrypt.hashSync(password, 10);


    // add the user to database
    const newUser = await UserModel.create({
      firstname, lastname, email,
      password: hashedPass,
      role, bio, 
      art_styles: artStyles,
      art_types: artTypes,
    });
;
    
    // on successful register, send the user info from the db without password
    resp.status(201).json({ 
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      reg_date: newUser.reg_date,
      role: newUser.role, 
      bio: newUser.bio, 
      art_styles: newUser.art_styles,
      art_types: newUser.art_types,
    });

  } catch (err) {
    if(err.message === "400 no data")
      resp.status(400).json(`Please provide a firstname, lastname, email, password and role to register`);

    else if(err.message === "409 exists")
      resp.status(409).json(`A user with the same email already exists!`);

    else
      resp.status(500).json(`Server error: ${err.message}`);
  }
});



/**
 * route:       POST /api/user/info
 * description: get the logged in user info
 * access:      PRIVATE (user email required)
 */
router.post("/info", async (req, resp) => {
  // get the session email, if there isn't, it returns undefined.
  const email = req.body?.email;

  try {
    // check if the session exists
    if(!email) throw new Error("401 not allowed");


    // check if user exists
    const [user] = await UserModel.find({ email });
    if(!user) throw new Error("404 not found");
    
    // send the user info from the db without password
    resp.json({ 
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      reg_date: user.reg_date,
      role: user.role, 
      bio: user.bio, 
      art_styles: user.art_styles,
      art_types: user.art_types,
    });

  } catch (err) {
    if(err.message === "401 not allowed")
      resp.status(401).json(`Unauthorized!`);

    else if(err.message === "404 not found")
      resp.status(404).json(`User not found!`);

    else
      resp.status(500).json(`Server error: ${err.message}`);
  }
});


module.exports = router;
