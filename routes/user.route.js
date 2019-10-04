const express = require('express');
const router = express.Router();
const UserValidation = require('../validations/userValidation');
const UserController = require('../controllers/user.controller');
const AuthenticationMiddleWare = require('../middlewares/authentication.middleware');

router.get('/test', (req, res) => res.status(200).json({ message: 'User route test - success' }));
router.get('/all_users', UserController.getAllUser);
router.post('/add', UserValidation.addNewUser, UserController.addUser);
router.post('/login', UserController.login);
router.get('/get_users_query', AuthenticationMiddleWare, UserController.getUserAboveAge)
module.exports = router;