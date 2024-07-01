const {makeRequest} = require('../utils/request');

class UserAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async get(username) {
        if (typeof username !== 'string' || username === '') throw new Error('Invalid username');
        return makeRequest(this.apiToken, 'GET', `user/${username}`);
    }
}

module.exports = UserAPI;
