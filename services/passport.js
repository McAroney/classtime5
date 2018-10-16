const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser( (user, done) => {
    done( null, user.id);
});

passport.deserializeUser( function (id, done) {
    User.findById(id).then(user => {
        done( null, user);
    });
});

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true

    }, 
    async (accessToken, refreshToken, profile, done) => {
    const exists = await User.findOne({googleID: profile.id});
        if(exists) {
//no need to create another one
            done( null, exists);
        } 
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
    })
);