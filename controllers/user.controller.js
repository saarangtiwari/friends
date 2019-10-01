const UserService = require('../services/user.service');

const UserController = {
  addUser: async (req, res, next) => {
    const user = req.body;
    const response = await UserService.addNewUser(user);
  if(!response.error) {
    res.status(200).json(response);
    }
    else {
  res.status(400).json(response)
}
  },
getAllUser: (req, res, next) => {
  res.status(200).json({
    users: UserService.getAllUsers()
  });
}
};

module.exports = UserController;