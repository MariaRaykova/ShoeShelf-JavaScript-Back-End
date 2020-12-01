const { cookie } = require('../config');
const { verifyToken } = require('./jwt');
const { User } = require('../models');

module.exports = (req, res, next) => { 
  
    const token = req.cookies[cookie] || '';

    if (!token) {
        next();
        return;
    }

    verifyToken(token)
    .then(({ _id }) => User.findOne({ _id })).then(({ email, fullName, _id }) => {
            req.user = { email, fullName, _id };//да можем да ги ползваме навсякъде, защото този middleware ще е закачен за всяка заявка
            res.locals.isLoggedIn = Boolean(req.user);
            res.locals.fullName = fullName;
            next(); //този mdw след като си свърши работата и закачи тези неща на req i res, да си продължи по веригата
        })
        .catch((e) => next(e));
}

