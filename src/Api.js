/**
 * Sends requests to server api.
 */
class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * Sends HTTP POST request to server api.
     *
     * @param {String} path Path to api method
     * @param {Object} data Object to send. It will be serialized to json
     * @return {Promise} Promise of `fetch` function.
     */
    post(path, data) {
        return fetch(`${this.baseUrl}/${path}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
    }
}

module.exports = Api;