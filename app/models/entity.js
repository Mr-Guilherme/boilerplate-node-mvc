const client = require('../../config/connect');

class Entity {
    constructor(collection) {
        this.db = client.db('template');
        this.myCollection = collection;
    }

    async insertOne(query) {
        try {
            const response = await this.db.collection(this.myCollection).insertOne(query);
            return response;
        } catch (error) {
            throw new Error('Error inserting entity');
        }
    };

    async find(query) {
        try {
            const response = await this.db.collection(this.myCollection).findOne(query);
            return response;
        } catch (error) {
            throw new Error('Error finding entity' + error);
        }
    };

    async findAll() {
        try {
            const response = await this.db.collection(this.myCollection).find({})
            return response;
        } catch (error) {
            throw new Error('Error finding entities' + error);
        }
    };

    async update(query, update) {
        try {
            const response = await this.db.collection(this.myCollection).updateOne(query, { $set: update })
            return response;
        } catch (error) {
            throw new Error('Error finding entities' + error);
        }
    };

    async delete(query) {
        try {
            const response = await this.db.collection(this.myCollection).deleteOne(query);
            return response;
        } catch (error) {
            throw new Error('Error finding entities' + error);
        }
    };
}

module.exports = Entity;
