var userController=require('../controllers/userController');


module.exports = function (app,passport) {
    app.get('/user/:id',passport.authenticate('jwt',{session:false}), userController.userGet);
    app.get('/user', userController.userGetAll);
    app.post('/user', userController.userCreate);
    app.put('/user/:id', userController.userPut);
    app.delete('/user/:id', userController.userDelete);
    app.post('/user/login', userController.loginUser);
};