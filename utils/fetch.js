var boom = require('boom');
var request = require('request');

exports.get = function(url) {
    return new Promise(function(resolve, reject) {
        request({
            url: url,
            json: true
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

exports.put = function(url) {
    return new Promise(function(resolve, reject) {
        request({
            url: url,
            json: true,
            method: 'PUT'
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