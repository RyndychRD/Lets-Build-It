var rp = require('request-promise');



var exports = module.exports = {};



exports.await = async function(req, res) {
    let options={
        method:'GET',
        uri:'http://google.com'
    };
    try{
        let responce = await rp(options);
        res.send(responce);

    }
    catch(err){

    }
};