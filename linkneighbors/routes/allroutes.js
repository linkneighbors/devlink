/**
 * Define all the routes being used in the project here
 */

exports.index = function(request, response) {
	// This loads views/index.ejs file
	response.render('index');
};
	
exports.signin = function(request, response) {
	//This loads views/signin.ejs file
	response.render('signin');
};

exports.signup = function(request, response) {
	//This loads views/signup.ejs file
	response.render('signup');
};

exports.group = function(request, response) {
	//This loads views/group.ejs file
	response.render('group');
};

exports.about = function(request, response) {
	//This loads views/about.ejs file
	response.render('about');
};

exports.blog = function(request, response) {
	//This loads views/blog.ejs file
	response.render('blog');
};

exports.contact = function(request, response) {
	//This loads views/contact.ejs file
	response.render('contact');
};

exports.error = function(request, response) {
	//This is error landing page
	response.send("Oh no!", 404);
};

exports.unauthorized = function(request, response) {
	response.render('unauthorized');
};
