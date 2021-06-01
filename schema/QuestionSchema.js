const { Schema } = require('mongoose');

const questionSchema = new Schema({
    question: {type: String, required: true},
    goodAnswer: {type: String},
    answers: {type: [String]}
});

module.exports = questionSchema;