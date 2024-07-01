const {makeRequest, getQueryString} = require('../utils/request');

class OAuthAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async createService(name, redirectUri) {
        if (typeof name !== 'string' || typeof redirectUri !== 'string') throw new Error('Invalid parameters');
        const data = { name: name, redirect_uri: redirectUri };
        return makeRequest(this.apiToken, 'PUT', 'oauth/create', data);
    }

    async deleteService() {
        return makeRequest(this.apiToken, 'DELETE', `oauth/delete`);
    }

    async checkAccessToken(access_token, client_secret) {
        if (typeof access_token !== 'string') throw new Error('Invalid access token');
        if (typeof client_secret !== 'string') throw new Error('Invalid client secret');
        const params = {access_token, client_secret}
        const queryString = await getQueryString(params);
        return makeRequest(null, 'GET', `oauth/checkToken${queryString}`);
    }
}

module.exports = OAuthAPI;
