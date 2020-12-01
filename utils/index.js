const jwt = require('./jwt');
const auth = require('./auth-middleware');
const registerValidator = require('./register-middleware-validator');
const loginValidator = require('./login-middleware-validator');
const isAuthNeeded = require('./is-auth-needed-middleware');
const formValidator = require('./form-validator');

module.exports = {
    jwt,
    auth, 
    registerValidator, 
    loginValidator,
    formValidator,
    isAuthNeeded
};