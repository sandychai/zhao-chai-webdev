var mongose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongose.model('Usermodel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByCrendential = findUserByCrendential;
userModel.deleteUser = deleteUser;
userModel.updateUser = updateUser


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