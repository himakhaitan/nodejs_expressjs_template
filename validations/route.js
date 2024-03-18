// Imports
const isEmpty = require("../utils/isEmpty");
const isEmail = require("../utils/isEmail");

// Validation Function
const sampleValidator = (data) => {
  let errors = {};

  // Validating Name
  data.name = isEmpty(data.name) ? "" : data.name;

  if (data.name.length == 0) {
    errors.name = "Name is Required";
  }

  // Validating Email

  data.email = isEmpty(data.email) ? "" : data.email;
  if (!isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  if (data.email.length == 0) {
    errors.email = "Email is Required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = sampleValidator;
