
var q = require('q');

var connectionString = 'mongodb://127.0.0.1:27017/assignment';
if (process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds151202.mlab.com:51202/heroku_mdxs4vnd';
}

var mongoose = require("mongoose");
mongoose.connect(connectionString);
mongoose.Promise = q.Promise;