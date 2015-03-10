var rest = require('../server/controllers/rest');

module.exports = function(app) {

	//find all songs route
	app.get('/songs', rest.findAll());

	//find one song route
	app.get('/songs/:id', rest.findOne());

	//Add song route
	app.post('/songs/', rest.add());

	//update song route
	app.put('/songs/:id', rest.update());

	//delete song route
	app.delete('/songs/:id', rest.remove());
};