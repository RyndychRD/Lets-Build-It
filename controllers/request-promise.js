var rp = require('request-promise');


var exports = module.exports = {};



exports.request_promise = function (req, res) {

     rp('http://www.google.com')
        .then(function () {
            res.send("OK")
        })
        .catch(function () {
            res.send("Fuck")
        });


};