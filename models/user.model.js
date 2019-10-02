const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cryptic = require('../utils/cryptic');

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

  findOneUser: async userData => await User.find(userData),

  login: async (user) => {
    const email = user.email;
    const password = user.password;

    // find previous data of the user:
    const userData = await User.findOne({ email });
    if (!userData) return { message: "User not found" };
    const isMatch = Cryptic.compare(password, userData.password);

    // finding user data from db:
    const userObjectFromDB = this.findOneUser({ email, password });
    console.log(userObjectFromDB);
    // const payload =
  }

}

module.exports = UserModel;
