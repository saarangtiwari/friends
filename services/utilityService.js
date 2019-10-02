const jwt = require('jsonwebtoken');


const UtilityService = {

  generateSigninToken: () => {
    jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: 3600 },
      (err, token) => {
        res.json({
          success: true,
          token: token
        });
      }
    );
  }
};