// import packages for use
const express = require("express");
const cors = require("cors");


// initialize the server API on port 12000
const app = express();
const PORT = 12_000;



// these are middlewares
// json middleware parses json data in the request body to use it normally
app.use(express.json());

// cors middlware specifies which domains are allowed access to website and the allowed method
app.use(cors({
  origin: ["http://localhost:5173", "https://fusart.onrender.com"],
  methods: ["GET", "POST"]
}));

// connect to mongodb (importing like this also runs the code inside the file)
require("./db.config.js");



// a little welcome on root of API
app.get("/api", (req, resp) => {
  resp.json({ entryMsg: "welcome to William's API!"});
})



// import the routers 
const userRouter = require("./routers/user.js");

// route the URL paths to their specified route handler
app.use("/api/user", userRouter);



// start the server and specify which port it should use on the pc, with a little msg in console
app.listen(
  PORT, 
  () => console.log(`API running on port ${PORT}`)
);