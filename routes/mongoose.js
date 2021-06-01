const Question = require('../model/QuestionModel');

const routes = async (fastify, options) => {
    fastify.get('/oui', async (request, reply) => {
        return {oui: "oui"}
    })
}

const test = new Question({question: "oui ?", goodAnswer: "non ?", answers: ["Si", "Sinon", "Alors"]});
test.save();

Question.find({}, (err, docs) => {
    docs.forEach((elem) => console.log(elem));
})

module.exports = routes;