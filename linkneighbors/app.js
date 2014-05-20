
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/allroutes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//This is a middleware that we will use on routes where
//we _require_ that a user is logged in, such as the /secret url
function requireUser(req, res, next) {
	if (!req.user) {
		res.redirect('/not_allowed');
	} else {
		next();
	}
}


app.get('/users', user.list);

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/signin', routes.signin);
app.get('/about', routes.about);
app.get('/signup', routes.signup);
app.get('/contact', routes.contact);
app.get('/blog', routes.blog);
app.get('/unauthorized', routes.unauthorized);


function requireUser(request, response, next) {
	
	if (!request.user) {
		response.redirect('/unauthorized');
	} else {
		next();
	}

}

// This page cannot be access without successful login
app.get('/group', requireUser, routes.group);


// It's dummy for now
// Use Mongo DB to validate the username & password
// return callback(null,null) in case of failure
// return callback(null,user) in case of success

function authenticateUser(username, password, callback) {
	
	console.log("User Validation Successful");
	// for now, send a default success response
	
	if( (username == "vpodugu@gmail.com") && (password == "venkat") ) {
	
		user.username = "vpodugu@gmail.com";
		return callback(null,user)
	
	} else {
		error = "Invalid Credentials!!!"
	}
	
	return callback(error, null);
	
}

// This is the POST request from signin Page
// Receives username & password
// Validate the user and redirect to group Page

app.post('/login', function(request, response) {
	
	console.log("POST request received");
	
	var _user = request.body.email;
	var _password = request.body.password;
	
	console.log("User Name " + _user);
	console.log("Password " + _password);
	
	//Authenticate the user
	authenticateUser(_user, _password, function(err,user) {
		
		if(user) {
		
			// the validation is successful
			// redirect to authorized users page.
			response.render("group");
		
		} else {
		
			// user validation failed.
			console.log("Authentication failed : " + err);
			response.render("signin", { error : err } );
		}
		
	});
	
	response.render("signin");

});


// Create HTTP Server and listen on port

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// This will redirect all the invalid routes to main page

app.use(function(req, res) {
    res.redirect('/')
});

