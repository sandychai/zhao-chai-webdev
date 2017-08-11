(function () {
    angular
        .module("Project")
        .controller("homeController",homeController);



    function homeController($http, $location) {

        var model = this;


        model.searchMovies = searchMovies;
        //model.searchDetails = searchDetails;
        //model.selectPhoto = selectPhoto;



        function searchMovies(title) {

            var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=18c5a437&s=' + title;

            $http.get(url)
                .then(function (response) {
                    model.movies = response.data.Search

                })
            $location.url('/movie')
        }
            // console.log(searchTerm);
            // flickrService
            //     .searchPhotos(searchTerm)
            //     .then(function(response) {
            //         console.log(response.data);
            //         data = response.data.replace("jsonFlickrApi(","");
            //         data = data.substring(0,data.length - 1);
            //         data = JSON.parse(data);
            //         model.photos = data.photos;
            //     });


        // function searchDetails(imdbID) {
        //     var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=18c5a437&i=' + imdbID;
        //
        //     $http.get(url)
        //         .then(function (response) {
        //             model.movie = response.data;
        //
        //         })
        //     //$location.url("/movie/" + imdbID)
        // }

    }
})();