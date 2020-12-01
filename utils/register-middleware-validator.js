const { body } = require('express-validator');

module.exports = [ 
    
    body('email', 'The provided email is not valid').isEmail(), 
    body('fullName', 'Please fill your name').isLength({ min: 5 }),
    body('password', 'The password should be at least 4 characters').isLength({ min: 4 }),
    body('repeatPassword').custom(customPasswordCheck) 
]
function customPasswordCheck(value, { req }) {
    if (value !== req.body.password) {
        throw new Error('Repeat password does not match');
    }
    return true
}