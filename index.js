const express = require('express');
const { port } = require('./config');

const app = express();
const appString = `Server is ready, listening on port: ${port}...`;

require('./config/database')().then(() => { 
//require-ваме си базата, тя ни връща промис, след като е fullfield си require конфигурационните 
//mdw, свързани с експрес като им подаваме екпрес инстанцията и app
//както сме казали в config/experess.js те приемат екпрес и app - module.exports = (express, app) => {
//Подаваме експрес, защото static,json mdw, bodyParser-a(urlencoded) са build in mdw на експрес 
    require('./config/express')(express, app);
 //след като сме сет ъп-нали тези mdw си require routes като това е функцията-  require('./config/routes') и тя приема експрес и апп
    require('./config/routes')(express, app);

    app.listen(port, console.log(appString));
    
}).catch((e) => console.log(e));