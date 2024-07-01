const {makeRequest, getQueryString} = require('../utils/request');

class CountryAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async getNotations(server, week=Math.floor((Date.now() / 1000 - 342100) / 604800) - 1, country = null) {
        if (typeof server !== 'string') throw new Error('Invalid server');
        if (typeof week !== 'number') throw new Error('Invalid week');
        if (country && typeof country !== 'string') throw new Error('Invalid country');

        const params = { week, country, server };
        const queryString = await getQueryString(params);
        return makeRequest(this.apiToken,'GET', `notations${queryString}`);
    }

    async get(server, country) {
        if (typeof server !== 'string' || typeof country !== 'string') throw new Error('Invalid server or country');
        return makeRequest(this.apiToken, 'GET', `country/${server}/${country}`);
    }
}

module.exports = CountryAPI;
