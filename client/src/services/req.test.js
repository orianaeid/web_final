import UserService from "./UserService.js";

/**
 * this file is used to test the integration of the API with the client
 */

// UserService.getUserInfo()
//   .then(data => console.log(data));


// UserService.loginUser({
//   email: "someone@gmail.com",
//   password: "password",
// }).then(data => console.table(data[0]));


UserService.registerUser({
  firstname: "Some",
  lastname: "One",
  email: "someone4@gmail.com",
  password: "password",
}).then(data => console.table(data));