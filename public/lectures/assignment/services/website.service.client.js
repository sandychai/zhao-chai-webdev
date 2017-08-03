(function () {
    angular
        .module("WAM")
        .factory("websiteService", websiteService);

    function websiteService($http) {


        var api = {
            createWebsite:createWebsite,
            findWebsiteById:findWebsiteById,
            updateWebsite:updateWebsite,
            deleteWebsite:deleteWebsite,
            findAllWebsitesForUser:findAllWebsitesForUser
        };

        return api;

        function createWebsite(website) {
            //website._id = (new Date()).getTime() + "";
            //websites.push(website);
            var url = '/api/assignment/user/userId/website';
            return $http.post(url,website)
                .then(function (response) {
                    return response.data;
                })
        }

        function updateWebsite(websiteId, website) {
            var url = '/api/assignment/user/userId/website/'+websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    return response.data;
                })
            //var oldWebsite = websites.find(function (website) {
              //  return website._id ===websiteId;
            //});
            //oldWebsite.name = website.name;
            //oldWebsite.description = website.description;
        }

        function deleteWebsite(websiteId) {
            var url = '/api/assignment/user/userId/website/'+ websiteId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
            //var website = websites.find(function (website) {
              //  return website._id ===websiteId;
            //});
            //var index = websites.indexOf (website);
            //websites.splice(index,1);
        }

        function findWebsiteById(websiteId) {
            var url = '/api/assignment/user/userId/website/' + websiteId;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })
            //return websites.find(function (website) {
              //  return website._id === websiteId;
            //})
        }

        function findAllWebsitesForUser(userId) {
            var url = '/api/assignment/user/' + userId + '/website';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
            //var resultSet = [];
            //for(var w in websites){
              //  if(websites[w].developerId === userId){
                //    resultSet.push(websites[w]);
                //}
           // }
            //return resultSet;
        }
    }
})();