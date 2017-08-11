(function () {
    angular
        .module('OmdbApp', [])
        .controller('searchController',searchController)
        .service("movieService", movieService)

    function searchController(movieService) {
        console.log("asd")
        var model = this;
        model.searchMovieByTitle = searchMovieByTitle;


        function init() {

        }

        init();
        
        function searchMovieByTitle(movieTitle) {
            movieService
                .searchMovieByTitle(movieTitle)
                .then(renderMovies)
        }

        function renderMovies(movies) {
            model.movies = movies;
        }
        
        function movieService($http) {
            this.searchMovieByTitle = searchMovieByTitle;
            
            function searchMovieByTitle(movieTitle) {
                var url = "http://www.omdbapi.com/?s="+movieTitle+"&apikey=18c5a437";
                return $http.get(url)
                    .then(function (response) {
                        return response.data;
                });
            }
        }

    }

})();
