const routes = require('./routes/')
const keys = require('./config/keys')
const passport = require('passport');
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true } );

const app = express();

app.use(
    cookieSession({
        //30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.hash]
    })
);

app.use(passport.initialize());
app.use(passport.session());

routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);