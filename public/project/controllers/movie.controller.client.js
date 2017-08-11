(function () {
    angular
        .module('Project')
        .controller('movieController',movieController);

    function movieController($routeParams, movieService) {

        var model = this;
        //model.userId = $routeParams['userId'];
        model.searchMovies = searchMovies;


        function init() {
            movieService
                .searchMovies(model.title)
                .then(function (movies) {
                    model.movies = movies;
                });
        }

        init();

    }

})();
