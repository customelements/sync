module.exports = [
    {
        method: 'PUT',
        path: '/',
        handler: require('./controllers/put.js')
    },
    {
        method: 'PUT',
        path: '/{type}',
        handler: require('./controllers/type/put.js')
    }
];
