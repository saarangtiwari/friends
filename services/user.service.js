const UserModel = require('../models/user.model');
const UtilityService = require('../services/utilityService');
const Cryptic = require('../utils/cryptic');

const UserService = {
    addNewUser: async user => await UserModel.addNewUser(user),
    getAllUsers: async () => await UserModel.getAllUsers(),
    login: async user => {
        
        // await UserModel.login(user)
        const email = user.email;
        const password = user.password;

        // find previous data of the user:
        const userData = await UserModel.findOneUser({ email });
        if (!userData) return { message: "User not found" };
        const isMatch = await Cryptic.compare(password, userData.password);
    
        if (!isMatch) return null; // user not found
    
        // finding user data from db:
        const token = await UtilityService.generateToken({ firstName: userData.firstName, lastName: userData.lastName, email: userData.email, phoneNumber: userData.phoneNumber });
        return token;
    },
    getUserAboveAge: async age => await UserModel.getUserAboveAge(age)
};

module.exports = UserService;