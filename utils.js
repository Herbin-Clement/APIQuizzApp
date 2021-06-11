const randomInt = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min);
}

const randomSample = (min, max, n) => {
    let i = 0;
    let ids = [];
    while (i < n) {
        const number = randomInt(min, max);
        if (!ids.find(number)) {
            ids.push(number);
        }
    }
    return ids;
}

// const categories = [
//     {idCat: 0, nameCat: "Science"},
//     {idCat: 1, nameCat: "Nature"},
//     {idCat: 2, nameCat: "History"},
//     {idCat: 3, nameCat: "Geographie"},
//     {idCat: 4, nameCat: "Serie"},
//     {idCat: 5, nameCat: "Film"},
//     {idCat: 6, nameCat: "Music"},
// ]

module.exports = { randomInt, randomSample }