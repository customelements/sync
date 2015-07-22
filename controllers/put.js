var boom = require('boom');
var request = require('request');
var fetch = require('../utils/fetch');
var token = require('../utils/token');

function controller(request, reply) {
    token.authorize(request)
        .then(function() {
            request.log(['#token.authorize'], 'Done with promise');
            return controller.put('https://sync.customelements.io/owners', request.headers);
        })
        .then(function() {
            request.log(['#put'], 'Done with promise');
            return controller.put('https://sync.customelements.io/repos', request.headers);
        })
        .then(function() {
            request.log(['#put'], 'Done with promise');
            return reply().code(200);
        })
        .catch(reply);
}

controller.put = function(url, headers) {
    return new Promise(function(resolve, reject) {
        request({
            url: url,
            json: true,
            method: 'PUT',
            headers: { 'Authorization': headers.authorization }
        }, function (error, response, body) {
            if (error) {
                reject(boom.wrap(error));
            }
            else if (response.statusCode !== 200) {
                var errorMsg = 'Error when requesting URL: ' + url;
                reject(boom.create(response.statusCode, errorMsg));
            }
            else {
                resolve(body);
            }
        });
    });
};

module.exports = controller;