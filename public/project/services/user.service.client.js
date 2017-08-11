(function () {
    angular
        .module("Project")
        .factory("userService", userService);

    function userService($http) {


        var api = {
            createUser:createUser,
            findUserByCrendentials:findUserByCrendentials,
            findUserById:findUserById,
            updateUser:updateUser,
            deleteUser:deleteUser,
            findUserByUsername:findUserByUsername
        };

        return api;
        
        function createUser(user) {
            var url = '/api/project/user'
            return $http.post(url,user)
                .then(function (response) {
                return response.data;
            })

        }
        
        function updateUser(userId, user) {
            var url = '/api/project/user/' + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                })


            //var oldUser = users.find(function (user) {
              //  return user._id ===userId;
            //})
            //oldUser.firstName = user.firstName;
            //oldUser.lastName = user.lastName;
            //oldUser.email = user.email;
            //oldUser.username = user.username
        }
        
        function deleteUser(userId) {
            var url = '/api/project/user/' + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }
        
        function findUserByUsername(username) {
            var user = users.find(function (user) {
                return user.username === username;
            });
            if(typeof user === 'undefined')
                return null;
            else
                return user;
        }
        
        function findUserByCrendentials(username, password) {
            var url = "/api/project/user?username=" + username + '&password=' + password;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })
        }

        function findUserById(userId) {
            var url = '/api/project/user/' + userId;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })
        }
    }
})();