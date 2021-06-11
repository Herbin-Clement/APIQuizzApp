const Question = require('../model/QuestionModel');

const routes = async (fastify, options) => {
    fastify.get('/questions', async (request, reply) => {
        const questions = await Question.find({}, (err, docs) => {
            return docs;
        })
        reply.send({status: true, data: questions});
    });

    fastify.get('/question/:id', async (request, reply) => {
        const { id } = request.params;
        const nbQuestion = await Question.countDocuments();
        if (id >= 0 && id < nbQuestion) {
            const question = await Question.findOne({"id": id}, (err, docs) => {
                return docs;
            })
            console.log(id);
            reply.send({status: true, data: question});
        } else {
            reply.send({status: false});
        }
    });

    fastify.post('/question', async (request, reply) => {
        const id = await Question.countDocuments();
        const { question, goodAnswer, answers } = request.body;
        if (question && goodAnswer && answers) {
            const newQuestion = new Question({question, goodAnswer, answers, id});
            newQuestion.save();
            reply.send({status: true, data: newQuestion});
        } else {
            reply.send({status: false});
        }
    })
}

module.exports = routes;