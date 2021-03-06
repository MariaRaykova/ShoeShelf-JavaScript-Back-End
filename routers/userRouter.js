const { userController, homeController } = require('../controllers');
const { registerValidator, loginValidator, isAuthNeeded } = require('../utils');

module.exports = (router) => {

  router.get('/login', isAuthNeeded(false), userController.get.login);
  router.get('/register', isAuthNeeded(false), userController.get.register);
  router.get('/profile',isAuthNeeded(), userController.get.profile);
  router.get('/logout',isAuthNeeded(), userController.get.logout);

  router.post('/register', isAuthNeeded(false), registerValidator, userController.post.register)
  router.post('/login', isAuthNeeded(false),loginValidator, userController.post.login)

  return router;
};