var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/config');
var modul = require('./model/index');
var app = express();
var passport=require('passport');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
require('./config/passport')(passport);

mongoose.connect(config.database, {useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function () {
    console.log('Database error');
});
db.once('open', function() {
    console.log('Nice! Database looks fine');
    // run()
});

require('./routes/test')(app);
require('./routes/user')(app,passport);

//

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');

});
