const {makeRequest, getQueryString} = require('../utils/request');

class ServerAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async getPlanning(server, month, year) {
        if (typeof server !== 'string' || typeof month !== 'number' || typeof year !== 'number') throw new Error('Invalid parameters');
        const params = { server, month, year };
        const queryString = await getQueryString(params);
        return makeRequest(this.apiToken, 'GET', `planning${queryString}`);
    }

    async getPlayersCount() {
        return makeRequest(this.apiToken, 'GET', 'playercount');
    }

    async getHDV(server) {
        if (typeof server !== 'string') throw new Error('Invalid parameters');
        return makeRequest(this.apiToken, 'GET', `hdv/${server}/list`);
    }
}

module.exports = ServerAPI;
