const UserService = require('../services/user.service');

const UserController = {
    addUser: (req, res, next) => { 
        const user = res.body.user;
        UserService.addNewUser(user);
    },
    getAllUser: (req, res, next) => {
        res.status(200).json({
            users: UserService.getAllUsers()
        });
    }
};

module.exports = UserController;