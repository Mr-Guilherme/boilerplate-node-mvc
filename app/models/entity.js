const client = require('../../config/connect');
const db = client.db('template');

class Entity {
    async insertOne(obj) {
        const response = await db.collection('entity').insertOne(obj)
        response
            .then((result) => {return result})
            .catch((err) => {throw err});
    };

    async findOne(obj) {
        const response = await db.collection('entity').findOne(obj)
        response
            .then((result) => {return result})
            .catch((err) => {throw err});
    };

    async findAll() {
        const response = await db.collection('entity').find({})
        response
            .then((result) => {return result})
            .catch((err) => {throw err});
    };

    
}
