const index = require("./index.json");

const data = Object.assign(
    index.paths
);

module.exports = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'API - Docs',
        description: 'User management API',
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
        },
        servers: [
        {
            url: 'http://localhost:3001/',
            description: 'localhost'
        },
        {
            url: 'https://stg-api-test.herokuapp.com/',
            description: 'staging'
        }
        ],
    paths: data,
}
