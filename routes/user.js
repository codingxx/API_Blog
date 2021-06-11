
var User = require('../repositories/users')

module.exports = function(router){
	router.route('/users')
		.get(async function(req, res){

			if(req.user.role != 'admin')
				return res.status(403).send({
					message: 'Access denied'
				});

			user = await User.getAllUsers();
			res.send(user)
		})
		.post(async function(req, res){

			// infomaton pour faire le mise à jour => req.body
			// infomation de utilisateur actuel => req.user
			console.log(req.body);
			var createdUser = await User.addUser(req.body);
			res.send('User added');
		})
	router.route('/user/:id')
		.get(async function(req, res){

			user = await User.getUser(req.params.id);
			res.send(user);
		});
}