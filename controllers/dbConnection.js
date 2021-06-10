const mongoose = require('mongoose');

const dbConnection = mongoose.createConnection('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

dbConnection.on('error', console.error.bind(console, "connection error"));

dbConnection.once('open', () => {
    console.log("We're connected !");
});

module.exports = dbConnection;