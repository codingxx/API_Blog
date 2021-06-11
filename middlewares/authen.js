
var jwt = require('jsonwebtoken');
var User = require('../repositories/users')

module.exports = function(req, res, next) {

	if(!req.body.token)
		return res.status(403).send({
			message: 'Access denied'
		});


	jwt.verify(req.body.token, 'blablablaclé', async function(err, decoded){
		if(!err) {
			var user = await User.getUser(decoded.id);

			if(user) {
				req.user = user;
				return next();
			}
		}

		return res.status(403).send({
			message: 'Access denied'
		});
	})
}