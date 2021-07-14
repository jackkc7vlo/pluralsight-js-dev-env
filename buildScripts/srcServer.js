import express from "express";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev.js";
import { createRequire } from "module";

/* eslint-disable no-console */
//var { prototype } = require('events');

const port = 3000;
const app = express();
const compiler = webpack(config);
const require = createRequire(import.meta.url);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, '../src/index.html'));
  res.sendFile('src/index.html', { root: '.'});
});

app.get('/users', function(req, res) {
  //res.sendFile(path.join(__dirname, '../src/index.html'));
  res.json([
    {"id": 1, "firstName": "Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName":"Norton", "email":"tnortonb@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName":"Lee", "email":"lee.tina@hotmail.com"},
  ]);
});

// listen on the port.  And if something comes in, open a new windows to the web site
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }

})
