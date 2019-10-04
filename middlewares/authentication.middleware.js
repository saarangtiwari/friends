const jwt = require('jsonwebtoken');
const UtilityService = require('../services/utilityService');
const UserService = require('../services/user.service');
const keys = require('../config/keys');

const AuthenticationMiddleWare = async (req, res, next) => {
    // valid token:
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader.split(" ")[1];
    if (!token) return next(UtilityService.getFormattedErrorMessage(401, "Token not found!"));
    console.log(token);
    try {
        const userData = jwt.verify(token, keys.secretOrKey);
        if(!userData) return next(UtilityService.getFormattedErrorMessage(404, "Invalid Token!"));
        const isUserFound = await UserService.findOneUser({ email: userData.email });
        if (isUserFound) next();
        else return next(UtilityService.getFormattedErrorMessage(404, "Invalid Token!"));
    } catch (error) {
        return next(UtilityService.getFormattedErrorMessage(404, "Invalid Token!"));
    }
}

module.exports = AuthenticationMiddleWare;