(function () {
    angular
        .module("WAM")
        .factory("websiteService", websiteService);

    function websiteService() {

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic  Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        var api = {
            createWebsite:createWebsite,
            findWebsiteById:findWebsiteById,
            updateWebsite:updateWebsite,
            deleteWebsite:deleteWebsite,
            findAllWebsitesForUser:findAllWebsitesForUser
        };

        return api;

        function createWebsite(website) {
            website._id = (new Date()).getTime() + "";
            websites.push(website);
        }

        function updateWebsite(websiteId, website) {
            var oldWebsite = websites.find(function (website) {
                return website._id ===websiteId;
            });
            oldWebsite.name = website.name;
            oldWebsite.description = website.description;
        }

        function deleteWebsite(websiteId) {
            var website = websites.find(function (website) {
                return website._id ===websiteId;
            });
            var index = websites.indexOf(website);
            websites.splice(index,1);
        }

        function findWebsiteById(websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            })
        }

        function findAllWebsitesForUser(userId) {
            var resultSet = [];
            for(var w in websites){
                if(websites[w].developerId === userId){
                    resultSet.push(websites[w]);
                }
            }
            return resultSet;
        }
    }
})();