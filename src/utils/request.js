const axios = require('axios');
const { baseURL, getHeaders } = require('../config');

const makeRequest = async (apiToken, method, endpoint, data = null) => {
    try {
        const response = await axios({
            method: method,
            url: `${baseURL}${endpoint}`,
            headers: getHeaders(apiToken),
            data: data
        });
        return response.data;
    } catch (error) {
        console.error(`Error making request to ${endpoint}:`, error.response.data);
        return { error: error.response.data };
    }
};


const getQueryString = async (params) => {
    const queryParams = new URLSearchParams(params);
    return '?' + queryParams.toString();
};



module.exports = { makeRequest, getQueryString};
