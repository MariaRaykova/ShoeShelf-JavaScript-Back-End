const { body } = require('express-validator');

module.exports = [ 
    
    body('email', 'The provided email is not valid').isEmail(), 
    body('password', 'The password should be at least 4 characters').isLength({ min: 4 }),
]
