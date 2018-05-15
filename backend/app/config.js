// load configuration from `.env` file
require("dotenv").config();
const url = require("url");

//const host = process.env.HOST;
const host = 'http://localhost'
const baseURI = "/api/v1";
const googleRedirectUrl = host + baseURI + "/auth/google/callback";
const facebookRedirectUrl = host + baseURI + "/auth/facebook/callback";
const linkedInRedirectUrl = host + baseURI + "/auth/linkedin/callback";

console.log("Google Redirect URL:  ", googleRedirectUrl);
console.log("Linkedin Redirect URL:", linkedInRedirectUrl);

module.exports = {
  env: process.env.NODE_ENV,
  baseURI: baseURI,
  host: host,
  app: {
    port: 3000
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN
    },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: googleRedirectUrl
    },
    linkedin: {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: linkedInRedirectUrl
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: facebookRedirectUrl
    }
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    from: process.env.MAIL_FROM,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }
};
