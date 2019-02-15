var testcontroller = require('../controllers/testcontroller');
var request = require('../controllers/request');
var request_promise =require('../controllers/request-promise')
var request_await=require('../controllers/request_await')


module.exports = function (app) {
    app.get('/', testcontroller.test);
    app.get('/request',request.request);
    app.get('/request_promise',request_promise.request_promise);
    app.get('/request_await',request_await.await);
};
