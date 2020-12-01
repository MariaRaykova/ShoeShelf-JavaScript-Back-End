const { homeController } = require('../controllers'); //require само папката защото автоматично си търси index.js файл вътре, където са обединени вс контролери

module.exports = (router) => {
    //приема роутър и за него закача заявки в случая гет
    //щом получим гет заявка за '/' ще извикаме homeController, а под / се има предвид слаша след home или след user na user controller-a
    // router.get('/', (req, res, next) => { //тук е симулирал някакъв middleware
    //     res.locals.name = 'Name';
    //     next()
    // }, homeController.get.home);
    router.get('/',homeController.get.home); 
    //home router-a след като кажем / просто ще бъде извикан homeController-a отпред виждаме, че е гет значи .get.home т.е. на този път искам да герна home-a
    //и като отидем в контролера виждаме get обекта функцията home е такава mdw функция, която приема res, res и next и рендерира home.hbs в нашия случай..
    return router;
}