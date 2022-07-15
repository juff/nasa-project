const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();
// TODO: env var
// const whitelist = ["http://localhost:3000", "http://localhost:8000"];
/*
// white listing  origin functionality
(origin, callback) => {
      console.log({
        origin,
      });
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
*/
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

// SERVE index.html
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
