const bcrypt = require('bcryptjs');

const Cryptic = {
    encrypt: async input => {
        const salt = await getSalt();
        const encryptedInput = bcrypt.hash(input, salt);
        return encryptedInput;
    },
    compare: async (currentInput, previousInput) => (bcrypt.compare(currentInput, previousInput))    
}

function getSalt() {
    return bcrypt.genSalt(10);
}


module.exports = Cryptic;