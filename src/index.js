const OAuthAPI = require('./api/oauth');
const ServerAPI = require('./api/server');
const CountryAPI = require('./api/country');
const UserAPI = require('./api/user');
const NgIslandAPI = require('./api/ngisland');
const NabotAPI = require('./api/nabot');
const WebhooksAPI = require('./api/webhooks');
const HdvAPI = require('./api/hdv');

class NationsAPI {
    constructor(apiToken) {
        this.apiToken = apiToken;
        this.oauth = new OAuthAPI();
        this.server = new ServerAPI(apiToken);
        this.country = new CountryAPI(apiToken);
        this.user = new UserAPI(apiToken);
        this.ngisland = new NgIslandAPI(apiToken);
        this.nabot= new NabotAPI(apiToken);
        this.nabotInstance = this.createNabotAPIClass();
        this.webhooks = new WebhooksAPI(apiToken);
        this.hdv = new HdvAPI(apiToken);
    }

    createNabotAPIClass() {
        const apiToken = this.apiToken;
        return class extends NabotAPI {
            constructor() {
                super(apiToken);
                this.initialize(); // Ensure sessionUid is initialized upon instantiation
            }
        };
    }
}

module.exports = NationsAPI;

const a = new NationsAPI('apiToken');
