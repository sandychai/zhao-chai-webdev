(function () {
    angular
        .module("WAM")
        .service("flickrService", flickrService);

    function flickrService($http) {
       this.searchPhotos = searchPhotos;


        var key = "b7ce068215b0edf18e402e85f74773f5";
        var secret = "58863cf2f0a48a9c";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
            function searchPhotos(searchTerm) {
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }

    }
})();