const UserModel = require('../models/user.model');
const UserValidation = require('../validations/userValidation');

const UserService = {
    addNewUser: user => {
        // validate user data object:
        const { errors, isValid } = validateRegisterInput(user);
        // Check Validation
        if (!isValid) throw new Error(errors); // return res.status(400).json(errors);
        const newUser = UserModel.addNewUser(user);
        return newUser;
    },
    getAllUsers: () => {
        const allUsers = UserModel.getAllUsers();
        return allUsers;
    }
};

module.exports = UserService;