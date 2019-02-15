var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var User = require("../model/user").User;


module.exports = function (passport) {
    var jwtOptions = {};
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = 'hello';

    var strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
        let user = await User.findOne({_id: jwt_payload.id});
        console.log('jwt',jwt_payload.id);
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    });
    passport.use(strategy);
};