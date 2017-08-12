var mongose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongose.model('Usermodel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByCrendential = findUserByCrendential;
userModel.deleteUser = deleteUser;
userModel.updateUser = updateUser;
userModel.addWebsite = addWebsite;
userModel.removeWebsite = removeWebsite;


module.exports = userModel;

function updateUser(userId, user) {
    return userModel.update({_id: userId},
        {$set:{username:user.username, password:user.password,
            firstName: user.firstName, lastName: user.lastName, email: user.email}})
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId)
}

function findUserByCrendential(username, password) {
    return userModel.findOne({username: username, password: password});
}

console.log("server");
function addWebsite(developerId, websiteId) {
    console.log(developerId)
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.websites.push(websiteId);
            console.log('ok');
            console.log(websites);
            return user.save();
        });
}

console.log("servers");
function removeWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        })
}