module.exports = [
    {
        method: 'PUT',
        path: '/{type}',
        handler: require('./controllers/put.js')
    }
];
