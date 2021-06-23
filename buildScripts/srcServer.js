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

// listen on the port.  And if something comes in, open a new windows to the web site
app.listen(port, function(err) {
   if (err) {
      console.log(err);
   }
   else {
      open('http://localhost:' + port);
   }

})
