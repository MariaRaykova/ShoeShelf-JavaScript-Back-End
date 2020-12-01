const { userController, homeController } = require('../controllers');
const { registerValidator } = require('../utils');

module.exports = (router) => {

  router.get('/login', userController.get.login);
  router.get('/register', userController.get.register);
  router.get('/profile', userController.get.profile);
  router.get('/logout', userController.get.logout);

  router.post('/register', registerValidator, userController.post.register)
  router.post('/login', userController.post.login)

  return router;
};