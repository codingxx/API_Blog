var express 		= require('express');
var Router 			= require('./routes/router');
var Authenticate_mid 	= require('./middlewares/authen');
var app 			= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(Router.pub);
app.use(Authenticate_mid, Router.priv);


app.listen(8000, function(){
	console.log("Api running in port 8000");
});