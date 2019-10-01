const UserModel = require('../models/user.model');

const UserService = {
    addNewUser: async user => {
    return await UserModel.addNewUser(user);;
},
getAllUsers: () => {
    const allUsers = UserModel.getAllUsers();
    return allUsers;
}
};

module.exports = UserService;