module.exports = (isAuthNeeded = true) => { 
    return (req, res, next) => {
        const isNotAuthWhenIsNeeded = !req.user && isAuthNeeded; 

        if(isNotAuthWhenIsNeeded || isAuthWhenIsNotNeeded){
          const redirectPage = isNotAuthWhenIsNeeded ? '/user/login' : '/shoes/shoes';
            res.redirect(redirectPage);
            return;
        }
        next();
    };
};