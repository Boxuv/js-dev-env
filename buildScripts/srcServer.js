// Express allows us to run the app locally in dev mode

// ES 5:
/*
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
*/

// ES 6:
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// As it's no issue writing to console when building, we will disable linting here:
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req,res){
  // Hard coding for simplicity. Otherwise it'd be hitting a database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@email.com"},
    {"id": 2, "firstName": "Rob", "lastName": "Fifth", "email": "rob@email.com"},
    {"id": 3, "firstName": "Knob", "lastName": "Gift", "email": "knob@email.com"}
  ]);
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
