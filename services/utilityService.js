const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const UtilityService = {

  generateToken: payload => {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        }
      );
    })

  }
};

module.exports = UtilityService;