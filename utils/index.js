//ще имаме помощни функции, които ще се ползват на повече от едно място
//създаване на JWT token
//валидатор за някой от формите
//mdw да позволява даден потр да достъпи страницата или да го редиректне към home

const jwt = require('./jwt');
const auth = require('./auth');

module.exports = {
    jwt, 
   auth
};