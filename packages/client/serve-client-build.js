const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, 'dist');
const port = 8090;

const start = () => {
  app.listen(port, (err) => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line no-console
    console.log(`Listening at localhost:${port}`);
  });
};

app.use(express.static(staticPath));
app.use((req, res, next) => {
  if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html')) {
    res.sendfile(path.join(staticPath, 'index.html'));
  } else {
    next();
  }
});

start();
