const { shoeController } = require('../controllers');

module.exports = (router) => { //функия, която приема раутъра и съответно щом е функция трябва и да го върне
   router.get('/shoes', shoeController.get.all) //на end пойнта all искаме да зарреждам get.all
  router.get('/create',shoeController.get.create);
   router.get('/details/:shoeId',shoeController.get.details);
   router.get('/shoes/details/:shoeId',shoeController.get.details);
   router.get('/edit/:shoeId',shoeController.get.edit);
   router.get('/delete/:shoeId',shoeController.get.delete);

   router.post('/create',shoeController.post.create);
   router.post('/edit/:shoeId',shoeController.post.edit);
  return router;
}