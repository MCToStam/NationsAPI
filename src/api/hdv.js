const {makeRequest} = require('../utils/request');

class UserAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async get(server) {
        if (typeof server !== 'string' || server === '') throw new Error('Invalid server');
        return makeRequest(this.apiToken, 'GET', `hdv/${server}/list`);
    }
}

module.exports = UserAPI;
