var privateRouter 	= require("express").Router()
var publicRouter 	= require("express").Router()

require('./user')(privateRouter)
require('./auth')(publicRouter)

module.exports ={
	priv: privateRouter,
	pub: publicRouter
}