var template = require('../tmpl/test.hbs');
module.exports.aye = function () {
	console.log('a');
	return 'a';
};


module.exports.bee = function () {
	console.log('b');
	return 'b';	
};
