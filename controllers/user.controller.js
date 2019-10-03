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

  getAllUser: async (req, res, next) => {
    res.status(200).json({
      users: await UserService.getAllUsers()
    });
  },

  login: async (req, res, next) => {
    const token = await UserService.login(req.body);
    if (!token) {
      res.status(400).json({
        message: "User Not found"
      });
    }
    else {
      res.status(200).json({
        token
      });
    }
  }

};

module.exports = UserController;