const UserService = require('../services/user.service');

const UserController = {

  addUser: async (req, res, next) => {
    const response = await UserService.addNewUser(req.body);
    if (response.error) {
      res.status(400).json(response);      
    }
    else {
      res.status(200).json(response);
    }
  },

  getAllUser: (req, res, next) => {
    res.status(200).json({
      users: UserService.getAllUsers()
    });
  }
};

module.exports = UserController;