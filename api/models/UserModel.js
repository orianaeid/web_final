const mongo = require("mongoose");


/*
 * this is a simple way to define a well-structured collection in mongodb
 * mongo itself doesn't have these options, mongoose package offers them and throws
 * errors on any violation (like giving an empty firstname)
 */
const User = new mongo.Schema ({
  firstname: {
    type: String,
    required: true,
    maxLength: 30,
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 300
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: () => "user"
  },
  bio: String,
  art_types: {
    type: [String], // array of strings
  },
  art_styles: {
    type: [String], 
  },
  reg_date: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  }
});


module.exports = mongo.model("users", User);