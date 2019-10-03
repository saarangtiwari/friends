const UserService = require('../services/user.service');
const UtilityService = require('../services/utilityService');

const UserController = {

  addUser: async (req, res, next) => {
    const response = await UserService.addNewUser(req.body);
    if (response.error) {
      next(UtilityService.getFormattedErrorMessage(404, response.error));
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
      next(UtilityService.getFormattedErrorMessage(404, "User Not Found"));
    }
    else {
      res.status(200).json({
        token
      });
    }
  },

  getUserAboveAge: async (req, res, next) => {
    res.status(200).json({
      users: await UserService.getUserAboveAge(req.body.age)
    });
  }

};

module.exports = UserController;