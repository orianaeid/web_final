// destructure the data object
export const validRegister = ({ firstname, lastname, email, password }) => {
  const emailRegEx = /^[\w\-\.]+@[a-zA-Z]+(\.[a-zA-Z]+)*$/i;
  const validEmail = emailRegEx.test(email);

  return validEmail && firstname && lastname && email && password;
}