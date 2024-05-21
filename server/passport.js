require('dotenv').config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID); 
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('Done function:', done);
      return done(null, profile);
    }
  )
);

passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
