var express = require('express')
var app = express()
var consign = require('consign')
var bodyParser = require('body-parser')

app.use(express.static('../client'))

app.use(bodyParser.json())

module.exports = app