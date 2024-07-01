const {makeRequest, getQueryString} = require('../utils/request');

class NgIslandAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async getAllIslands(page = 1) {
        if (typeof page !== 'number') throw new Error('Invalid page');
        const params = { page };
        const queryString = await getQueryString(params);

        return makeRequest(this.apiToken, 'GET', `ngisland/list${queryString}`);
    }
}

module.exports = NgIslandAPI;
