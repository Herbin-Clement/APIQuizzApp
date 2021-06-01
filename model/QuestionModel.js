const dbConnection = require('../controllers/dbConnection');
const questionSchema = require('../schema/QuestionSchema');

console.log(questionSchema);

const Question = dbConnection.model('Question', questionSchema, 'Questions');

module.exports = Question;

