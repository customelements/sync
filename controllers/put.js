var boom = require('boom');
var fetch = require('../utils/fetch');

function controller(request, reply) {
    Promise.all([
        fetch.put('https://sync.customelements.io/owners'),
        fetch.put('https://sync.customelements.io/repos')
    ])
    .then(function() {
        return reply().code(200);
    })
    .catch(reply);
}

module.exports = controller;