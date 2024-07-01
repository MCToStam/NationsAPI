module.exports = {
    baseURL: 'https://publicapi.nationsglory.fr/',
    getHeaders: (token) => ({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined
    })
};
