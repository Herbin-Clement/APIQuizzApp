const { Schema } = require('mongoose');

const questionSchema = new Schema({
    id: {type: Number, required: true},
    question: {type: String, required: true},
    goodAnswer: {type: String, required: true},
    answers: {type: [String], required: true},
    idCat: {type: Number, require: true},
    nameCat: {type: String, require: true}
    
});

module.exports = questionSchema;