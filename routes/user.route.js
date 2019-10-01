const express = require('express');
const router = express.Router();
const UserValidation = require('../validations/userValidation');
const userController = require('../controllers/user.controller');

router.get('/test', (req, res) => res.status(200).json({ message: 'User route test - success' }));
router.get('/alluser', userController.getAllUser);
router.get('/add', UserValidation.addNewUser, userController.addUser);
module.exports = router;