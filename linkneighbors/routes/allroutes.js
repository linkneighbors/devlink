/**
 * Define all the routes being used in the project here
 */

export.index = function(request, response) {
	response.send('index', title: 'Index');
};
	
export.login = function(request, response) {
	response.send('signin', title: 'Login');
};

export.signup = function(request, response) {
	response.send('signup', title: 'Create Account');
};

export.group = function(request, response) {
	response.send('signin', title: 'Login');
};

export.about = function(request, response) {
	response.send('about', title: 'About');
};

export.blog = function(request, response) {
	response.send('blog', title: 'Blog');
};

export.contact = function(request, response) {
	response.send('contact', title: 'Contact');
};

