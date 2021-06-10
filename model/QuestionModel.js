const dbConnection = require('../controllers/dbConnection');
const questionSchema = require('../schema/QuestionSchema');

const Question = dbConnection.model('Question', questionSchema, 'Questions');

module.exports = Question;

