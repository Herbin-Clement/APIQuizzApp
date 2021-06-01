const mongoose = require('mongoose');

const dbConnection = mongoose.createConnection('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = dbConnection;
