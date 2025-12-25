const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const FacebookStrategy =require("passport-facebook")
const keys = require("../config/keys")

//we dont need to requiure any mongoose model class
const mongoose =require("mongoose")
const User =mongoose.model('users')

//serializeUser sets a cookie with a token
passport.serializeUser((user,done)=>{
    //user = one that is just saved to the database
    //user.id = one of mango.db idaa not the google id
    done(null,user.id)
})

// deserializeUser = truns cookie user's id COMMING FORM PASSPORT into user instance in required time
passport.deserializeUser((id,done)=>{
    //id = user.id
    User.findById(id)
        .then(user => {
            done(null,user)
        })
})

passport.use(new FacebookStrategy({
    clientID: keys.facebookCllientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    proxy: true
},async (accessToken,refreshToken,profile,done)=> {
    const existingUser = await User.findOne({Id: profile.id})
            if(existingUser){
                return done((null,existingUser))
            }
            const user =await new User({Id: profile.id}).save()
            done(null,user)
        })
)

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken,refreshToken,profile,done)=> {
    const existingUser =await new User.findOne({Id: profile.id})
    if(existingUser)
    {
        done(null,existingUser)
    }
    else{
        const user = await new User({Id:profile.id}).save()
        done(null,user)
    }

})
)




