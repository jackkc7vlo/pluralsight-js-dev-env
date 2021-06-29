import express from "express";
import open from "open";
//import { createRequire } from "module";
import compression from 'compression';

/* eslint-disable no-console */
//var { prototype } = require('events');

const port = 3000;
const app = express();
//const require = createRequire(import.meta.url);

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
   //res.sendFile(path.join(__dirname, '../src/index.html'));
   res.sendFile('dist/index.html', { root: '.'});
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
   }
   else {
      open('http://localhost:' + port);
   }

})
