const { name } = require('../controllers/dbConnection');
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

    fastify.get('/question/category/:cat', async (request, reply) => {
        const { cat } = request.params;
        const questions = await Question.find({"idCat": cat}, (err, docs) => {
            return docs;
        });
        reply.send({status: true, data: questions});
    })

    fastify.get('/question/:cat/:idCat', async (request, reply) => {
        const { nameCat, idCat } = request.params;
        const nbQuestion = await Question.count({"nameCat": nameCat});
        if (idCat => 0 && idCat < nbQuestion) {
            const question = await Question.findOne({"idCat": idCat}, (err, docs) => {
                return docs;
            })
            reply.send({status: true, data: question});
        } else {
            reply.send({status: false});
        }
    });

    fastify.get('/random/:n', async (request, reply) => {
        let i = 0;
        const nbQuestion = await Question.countDocuments();
        const { n } = request.params;
        const ids = randomSample(0, nbQuestion, n);
        reply.send({status: true, data: ids});
    });

    fastify.get('/categories', async (request, reply) => {
        const categories = Question.distinct("nameCat");
        reply.send({status: true, data: categories}); 
    })

    fastify.post('/question', async (request, reply) => {
        const { question, goodAnswer, answers, nameCat } = request.body;
        const id = await Question.countDocuments();
        const idCat = await Question.count({"nameCat": nameCat});
        if (question && goodAnswer && answers && nameCat) {
            const newQuestion = new Question({question, goodAnswer, answers, id, idCat, nameCat});
            newQuestion.save();
            reply.send({status: true, data: newQuestion});
        } else {
            reply.send({status: false});
        }
    });
}

module.exports = routes;