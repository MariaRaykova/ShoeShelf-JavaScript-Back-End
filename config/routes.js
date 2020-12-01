module.exports = (express, app) => {
    //правим си функция, която приема вс раутеве и казваме, че на пътища, които стартират с home ще отговаря homeRouter, a на тези, които стартират с /user - userRouter
    const routers = require('../routers')(express.Router());


    app.use('/home', routers.homeRouter);
    app.use('/user', routers.userRouter);
    app.use('/shoes', routers.shoeRouter); //за вс пътища, които започват с shoes/ искам да се извиква от раутърите shoeRouter
}