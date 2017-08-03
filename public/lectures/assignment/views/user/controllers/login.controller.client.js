(function () {
    angular
        .module('WAM')
        .controller('loginController',loginController);

    function loginController($location, userService) {

        var model = this;



        model.login = function (username, password) {
            //var found = userService.findUserByCrendentials(username,  password);


            userService
                .findUserByCrendentials(username, password)
                .then(login, handleError);

            function handleError(error) {
                model.message = "cannot find" + username;
            }
            
            function login(found) {
                if(found !== null){
                    $location.url("/user/" + found._id);
                }
                else{
                    model.message = "cannot find" + username;
                }
            }

            }
        }

})();
