const passport = require("passport");
//using java web token for authorisation 
const JWTStrategy =require ("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
//calling doctors schema  from models
const User = require ('../model/User')
//authorising for generating token
let opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'equivotask',
}
passport.use(new JWTStrategy(opts, function(jwtPayLoad,done){
    Doctors.findById(jwtPayLoad._id, function(err,user){
        if(err){
            console.log("Error in finding user from JWT");
            return;
              }
            if(user){
                return done(null, user);
                    }
                else{
                    return done(null, false);
                }

        })
}))
module.exports=passport;