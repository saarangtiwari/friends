const UserModel = require('../models/user.model');

const UserService = {
    addNewUser: async user => {
    const response = await UserModel.addNewUser(user);
    return response;
},
getAllUsers: () => {
    const allUsers = UserModel.getAllUsers();
    return allUsers;
}
};

module.exports = UserService;