const jwt = require('./jwt');
const auth = require('./auth');
const registerValidator = require('./register-middleware-validator');
const formValidator = require('./form-validator');

module.exports = {
    jwt,
    auth, 
    registerValidator, 
    formValidator
};