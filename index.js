const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: OUR_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, callback) => {
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return callback(err, user);
      });
    }
  )
);

const PORT = process.env.PORT || 5000;
// Tells Node to listen on Port 5000
app.listen(PORT);
