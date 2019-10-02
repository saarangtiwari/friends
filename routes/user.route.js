const express = require('express');
const router = express.Router();
const UserValidation = require('../validations/userValidation');
const userController = require('../controllers/user.controller');

router.get('/test', (req, res) => res.status(200).json({ message: 'User route test - success' }));
router.get('/allusers', userController.getAllUser);
router.post('/add', UserValidation.addNewUser, userController.addUser);
router.post('/login', userController.login);
module.exports = router;