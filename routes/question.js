const Question = require('../model/QuestionModel');

const routes = async (fastify, options) => {
    /**
     * Get all questions
     */
    fastify.get('/questions', async (request, reply) => {
        const questions = await Question.find({}, (err, docs) => {
            return docs;
        })
        reply.send({status: true, data: questions});
    });

    /**
     * Get all questions of nameCat category
     */
     fastify.get('/questions/category/:nameCat', async (request, reply) => {
        const { nameCat } = request.params;
        const questions = await Question.find({"nameCat": nameCat}, (err, docs) => {
            return docs;
        });
        reply.send({status: true, data: questions});
    })


    /**
     * Get question with id "id"
     */
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

    /**
     * Get question with category nameCat and id in the category idCat
     */
    fastify.get('/question/:nameCat/:idCat', async (request, reply) => {
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

    /**
     * Get a list of number between 0 and n
     */
    fastify.get('/random/:n', async (request, reply) => {
        let i = 0;
        const nbQuestion = await Question.countDocuments();
        const { n } = request.params;
        const ids = randomSample(0, nbQuestion, n);
        reply.send({status: true, data: ids});
    });

    /**
     * Get the list of categories
     */
    fastify.get('/categories', async (request, reply) => {
        const categories = await Question.distinct("nameCat");
        reply.send({status: true, data: categories}); 
    })

    /**
     * Post a question
     */
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