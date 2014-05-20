/**
 * Define all the routes being used in the project here
 */

exports.index = function(request, response) {
	response.render('index');
};
	
exports.signin = function(request, response) {
	response.render('signin');
};

exports.signup = function(request, response) {
	response.render('signup');
};

exports.group = function(request, response) {
	response.render('group');
};

exports.about = function(request, response) {
	response.render('about');
};

exports.blog = function(request, response) {
	response.render('blog');
};

exports.contact = function(request, response) {
	response.render('contact');
};

