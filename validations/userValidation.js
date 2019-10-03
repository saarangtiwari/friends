const Validator = require('validator');
const isEmpty = require('./isEmpty');

const UserValidation = {
  addNewUser: (req, res, next) => {
    const userData = req.body;

    let errors = {};
    userData.firstName = !isEmpty(userData.firstName) ? userData.firstName : '';
    userData.lastName = !isEmpty(userData.lastName) ? userData.lastName : '';
    userData.email = !isEmpty(userData.email) ? userData.email : '';
    userData.phoneNumber = !isEmpty(userData.phoneNumber) ? userData.phoneNumber : '';
    userData.password = !isEmpty(userData.password) ? userData.password : '';
    userData.birthdayTimeStamp = !isEmpty(userData.birthdayTimeStamp) ? userData.birthdayTimeStamp : '';

    if (!Validator.isLength(userData.firstName, { min: 5, max: 15 })) {
      errors.firstName = 'firstName must be between 10 and 120 characters.';
    }

    if (Validator.isEmpty(userData.firstName)) {
      errors.firstName = 'firstName is required.';
    }

    if (!Validator.isLength(userData.lastName, { min: 5, max: 15 })) {
      errors.lastName = 'lastName must be between 10 and 120 characters.';
    }

    if (Validator.isEmpty(userData.lastName)) {
      errors.lastName = 'lastName is required.';
    }

    if (Validator.isEmpty(userData.email)) {
      errors.email = 'Email is required.';
    }

    if (Validator.isEmpty(userData.password)) {
      errors.password = 'Password is required.';
    }

    if (!Validator.isLength(userData.password, { min: 6, max: 40 })) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(userData.birthdayTimeStamp)) {
      errors.birthdayTimeStamp = 'birthdayTimeStamp is required';
    }

    if (!userData.age) {
      errors.age = 'age is required';
    }

    if (Validator.isEmpty(userData.phoneNumber)) {
      errors.phoneNumber = 'Phone Number is required';
    }


    if (isEmpty(errors)) {
      next();
    }
    else {
      res.status(404).json({ message: errors });
    }

    // return {
    //   errors,
    //   isValid: isEmpty(errors)
    // };
  }
}


module.exports = UserValidation;