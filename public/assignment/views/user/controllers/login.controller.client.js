(function () {
    angular
        .module('WAM')
        .controller('loginController',loginController);

    function loginController($location, userService) {

        var model = this;



        model.login = function (username, password) {
            var found = userService.findUserByCrendentials(username,  password);

                if(found !== null){
                    $location.url("/user/" + found._id);
                }
                else{
                    model.message = "cannot find" + username;
                }
            }
        }

})();
