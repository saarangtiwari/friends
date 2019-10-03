const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cryptic = require('../utils/cryptic');
const UtilityService = require('../services/utilityService');

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  birthdayTimeStamp: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});


const User = mongoose.model('users', UserSchema);

const UserModel = {
  addNewUser: async user => {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) return { message: "User's email ID already exists" };
    const hashedPassword = await Cryptic.encrypt(user.password);
    user.password = hashedPassword;
    const newUser = new User(user);
    try {
      newUser.save();
      return {
        message: "User Created",
        data: newUser
      }
    }
    catch (error) {
      return {
        message: "Error occurred while creating New User",
        error
      };
    }
  },

  getAllUsers: async () => await User.find({}),

  findOneUser: async userData => await User.findOne(userData),

  login: async user => {
    const email = user.email;
    const password = user.password;

    // find previous data of the user:
    const userData = await User.findOne({ email });
    if (!userData) return { message: "User not found" };
    const isMatch = await Cryptic.compare(password, userData.password);

    if (!isMatch) return null; // user not found

    // finding user data from db:
    const token = await UtilityService.generateToken({ firstName: userData.firstName, lastName: userData.lastName, email: userData.email, phoneNumber: userData.phoneNumber });
    return token;
  },

  getUserAboveAge: async age => await User.find({ age: { $gt: age } }).sort({birthdayTimeaStamp : -1})
}

module.exports = UserModel;
