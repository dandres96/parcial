const express = require("express")
const mongoose = require("mongoose")
const env = require('node-env-file')
env(__dirname + '/.env')

const app = express()
const port = 300

app.listen(port , ()=>{ console.log('Connect with the port' , env);})