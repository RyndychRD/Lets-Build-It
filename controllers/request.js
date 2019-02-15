var request = require('request');
var exports = module.exports = {};
var resultSucces=0;


exports.request = function (req, res) {

    request('http://www.google.com', function (error, response, body) {
        // res.send('error:', error); // Print the error if one occurred
        // res.send('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //res.send( body); // Print the HTML for the Google homepage.
        resultSucces++;
        request('http://www.yandex.ru', function (error, response, body) {
            // res.send('error:', error); // Print the error if one occurred
            // res.send('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //res.send( body); // Print the HTML for the Google homepage.
            resultSucces++;
            request('http://www.bash.im', function (error, response, body) {
                // res.send('error:', error); // Print the error if one occurred
                // res.send('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                //res.send( body); // Print the HTML for the Google homepage.
                resultSucces++;
                    res.json({OK:resultSucces});

            });
        });

    });



};