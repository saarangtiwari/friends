const UserModel = require('../models/user.model');

const UserService = {
    addNewUser: async user => await UserModel.addNewUser(user),
    getAllUsers: async () => await UserModel.getAllUsers(),
    login: async user => await UserModel.login(user)
};

module.exports = UserService;