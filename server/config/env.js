'use strict';

let config = {

  development: {
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/mean-sample-dev',
    cookieToken: 'mean-token',
    jwtSecret: 'cJbdB3t$',
    facebookAuth: {
      clientID: process.env.FACEBOOK_ClientId,
      clientSecret: process.env.FACEBOOK_ClientSecret,
      callbackURL: '/auth/facebook/callback'
    }
  },

  production: {
    db: process.env.MONGODB_URI || 'mongodb://heroku_q38lp2xt:epfgp8nat2u9o6jqbdb01tp9ep@ds139082.mlab.com:39082/heroku_q38lp2xt',
    cookieToken: 'mean-token',
    jwtSecret: 'cJbdB3t$',
    facebookAuth: {
      clientID: process.env.FACEBOOK_ClientId,
      clientSecret: process.env.FACEBOOK_ClientSecret,
      callbackURL: '/api/auth/facebook/callback'
    }
  }
};

export default config;