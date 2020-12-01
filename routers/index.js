const routers = [
    { homeRouter: require('./homeRouter') },
    { shoeRouter: require('./shoeRouter') },
    { userRouter: require('./userRouter') }
];

//index файла обединява двата раутер-а и ги експортва, за да не ги рекуире по отделно
//homeRouter-a e е функия, която приема раутer, и на този раутер, който дойде като параметър закачаме енд-пойнтите(res.locals.name ...), към които даден контолер да отговаря
//и след като сме го require те вече са функциите, които очакват да получат даден router
//index функцията, която експортва за външните файлове тези два раутъра+ бъдещите които ще напишем 
//const routers е масив от два обекти с функции, които очакват някаквъ раутер
//reduce-ваме масива, първия път вземеме key-я който e homeRouter
module.exports = (router) => {
    return routers.reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return Object.assign(acc, { [key]: curr[key](router) });
    }, {}); //и тук за обекта закачаме пропърти homeRouter и тук вече ще извикаме функцията(curr[key], на която вече ще е подаден роутер (router) - [key]: curr[key](router))
};