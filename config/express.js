const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const { auth } = require('../utils')

module.exports = (express, app) => {
//експортваме функция, която приема инстанция на експрес библиотеката и app
//под app се разбира функцията, която е express(), където получаваме самия сървър
//за app закачаме middlewares: 
    app.use(express.static('public')); //mdw, който сетва статичните файлове
    app.use(express.json()); //който ни позволява да получаваме информацията от формите в json формат
    app.use(express.urlencoded({ extended: false })); //mdw, с който успяваме да достъпим информацията в body-то с req.body. Това явно е body-parser-a

    app.use(cookieParser()); //достъпваме куукитата
    
   app.use(auth);  //трябва да се сложи между bodyParser-а i view engin-a, защото вътре достъпваме куукитата, а вътре подаваме неща на res, които после да се визуализират - is Logged and fullname

    app.engine('hbs', handlebars({ //сетъп-ваме viewengine-а handlebars
        layoutsDir: 'views',
        defaultLayout: 'base-layout.hbs',
        partialsDir: 'views/partials',
        extname: 'hbs'
    }));
    app.set('viewengine', 'hbs');
}