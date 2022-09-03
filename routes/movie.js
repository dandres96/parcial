const express = require("express")
const movie_routes = express.Router()

movie_routes.post('/movie' , (req,res)=>{})
movie_routes.get('/movies' , (req,res)=>{})
movie_routes.get('/movies/:idMovie' , (req,res)=>{})
movie_routes.put('/movies/:idMovie' , (req,res)=>{})
movie_routes.delete('/movies/:idMovie' , (req,res)=>{})

module.exports = movie_routes 