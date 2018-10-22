const express = require('express');
const session = require('express-session');

module.exports = () => {
  const app = express();

  app.use(session({
    secret: 'MY_SECRET', saveUninitialized: true, resave: false, cookie: { maxAge: 3600000 },
  })); // Hour

  return app;
};
