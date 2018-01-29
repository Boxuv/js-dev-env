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

const port = 3000;
const app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
