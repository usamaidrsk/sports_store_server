const faker = require("faker");
let data = [];
const categories = ["Watersports", "Soccer", "Chess", "Running"];
faker.seed(100);
for (let i = 1; i <= 500; i++) {
    const category = faker.helpers.randomize(categories);
    data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: faker.commerce.price()
    })
}

module.exports = function () {
    return { 
        products: data,
        categories: [...new Set(data.map(p => p.category))].sort(),
        orders: []
    }
}