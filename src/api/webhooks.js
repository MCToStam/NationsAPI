const {makeRequest} = require('../utils/request');

class WebhooksAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async _registerWebhook(url, eventType) {
        if (typeof url !== 'string' || url === '') throw new Error('Invalid URL');
        if (typeof eventType !== 'string' || eventType === '') throw new Error('Invalid eventType');
        const data = { url: url, eventType: eventType}
        return makeRequest(this.apiToken, 'POST', 'webhook/register', data);
    }

    async createCountry(url) {
        if (typeof url !== 'string' || url === '') throw new Error('Invalid URL');
        return this._registerWebhook(url, 'country.created');
    }

    async disbandCountry(url) {
        if (typeof url !== 'string' || url === '') throw new Error('Invalid URL');
        return this._registerWebhook(url, 'country.disbanded');
    }

    async changeLeader(url) {
        if (typeof url !== 'string' || url === '') throw new Error('Invalid URL');
        return this._registerWebhook(url, 'country.changeleader');
    }

    async getWebhook(webhookId) {
        if (typeof webhookId !== 'number') throw new Error('Invalid webhookId');
        return makeRequest(this.apiToken, 'GET', `webhook/${webhookId}`);
    }

    async getAllWebhooks() {
        return makeRequest(this.apiToken, 'GET', 'webhook/all');
    }

    async removeWebhook(webhookId) {
        if (typeof webhookId !== 'number') throw new Error('Invalid webhookId');
        return makeRequest(this.apiToken, 'DELETE', `webhook/${webhookId}`);
    }
}

module.exports = WebhooksAPI;
