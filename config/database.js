const mongoose = require('mongoose');
const dbConnectionString = require('./').dbUrl;

const dbConnectionOptions = { //когато стартираме конзолата да не излизат деприкейтнатите неща
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
};

module.exports = () => {
return mongoose.connect(dbConnectionString, dbConnectionOptions);
}