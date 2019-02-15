var exports = module.exports = {};
let user=require('../model/user').User;
let jwt=require('jsonwebtoken');
let secret='hello';

exports.userGetAll =async function (req, res) {
    let findUser = await user.find();
    res.json(findUser);
};

exports.userGet = async function (req, res) {
    let id=req.params.id;
    let findUser = await user.findOne({_id:id});
    res.json(findUser);
};

exports.userPut =async function (req, res) {
    try {
        let x = await user.where({_id: req.params.id}).updateOne({$set: req.body});
        res.json(x);
    }
    catch(e){
        console.log(e);
    }
};

exports.userDelete = async function (req, res) {
    let id=req.params.id;
    try {
        let deleteUser = await user.deleteOne({_id: id});
        res.json(deleteUser);
    }
    catch(e){
        res.json(e);
    }
};


exports.loginUser = async function (req, res) {
    console.log('все норм');
    var error = false
    var object = null
    try {
        var allUser = await user.findOne({email: req.body.email})
        if (allUser!=null) {
            if (req.body.password === allUser.password){

             console.log('зашли')
                let data={id:allUser._id};
             console.log('token ',data);
                let token=jwt.sign(data,secret);
                res.send(token);
            }
            else console.log('пароль не совпал')
        }
        else console.log('пользователь не найден')
    }
    catch (e) {
        error = true
        console.log('ошибка системы')
    }
    //res.json({error: error, object: object})
};

exports.userCreate = async function(req,res){
  //  console.log(req.body);
  //  res.send(req.body);
    let error=false;
    let message="user created";
    let object=null;

    try
    {
        let createUser = await user.create(req.body);
        object=createUser;
    }
    catch(e)
    {
        error=true;
        message=e;
    }
    res.json({
                "error":error,
                "message":message,
                "object":object
             })
}