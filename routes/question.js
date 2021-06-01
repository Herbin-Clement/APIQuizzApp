const data =  [
    {
        question: "Est-ce-que j'aimes les frites ?",
        answers: ["Salut", "BAHHH", "Infernal", "Oui"],
        correctAnswer: "Oui"
    },
    {
        question: "Est-ce-que j'aimes pas les frites ?",
        answers: ["Salut", "Non", "Oui", "Salut"],
        correctAnswer: "Non"
    },
    {
        question: "Quand est-né Julien ?",
        answers: ["21 février 2001", "21 février 1994", "9 janvier 2001", "Qui ?"],
        correctAnswer: "21 février 2001"
    },
    {
        question: "What is the name of the process that sends one qubit of information using two bits of classical information ?",
        answers: ["Quantum Teleporation", "Quantum Entanglement", "Quantum Programming", "Super Dense Coding"],
        correctAnswer: "Super Dense Coding"
    }];

const routes = async (fastify, options) => {
    fastify.get('/', async (request, reply) => {
        const tmp = Math.floor(Math.random() * data.length);
        return data[tmp];
    })
}

module.exports = routes;