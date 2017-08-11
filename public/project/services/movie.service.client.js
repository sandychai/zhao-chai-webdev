// (function () {
//     angular
//         .module("PROJECT")
//         .service("omdbService", omdbService);
//
//     function omdbService($http) {
//         this.searchPhotos = searchPhotos;
//
//
//         var key = "18c5a437";
//         //http://www.omdbapi.com/?i=tt3896198&apikey=18c5a437&s=batman
//         var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
//         function searchPhotos(searchTerm) {
//             var url = urlBase
//                 .replace("API_KEY", key)
//                 .replace("TEXT", searchTerm);
//             return $http.get(url);
//         }
//
//     }
// })();

(function () {
    angular
        .module("Project")
        .service("movieService", movieService);

    function movieService($http) {


        //var api = {
         //   searchMovies:searchMovies
        //};

        //return api;




        function searchMovies(title) {
            var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=18c5a437&s=' + title;
            return $http.get(url);
                // .then(function (response) {
                //     return response.data;
                // });

        }
    }
})();