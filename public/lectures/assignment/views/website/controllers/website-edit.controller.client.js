(function () {
    angular
        .module('WAM')
        .controller('websiteEditController',websiteEditController);

    function websiteEditController($routeParams, websiteService, $location) {


        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];

        //model.createWebsite = createWebsite;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite

        function init() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                })
            websiteService
                .findWebsiteById(model.websiteId)
                .then(function (website) {
                    model.website = website;
                })
            //model.websites = websiteService.findAllWebsitesForUser(model.userId);
            //model.website = angular.copy(websiteService.findWebsiteById(model.websiteId))
        }

        init();

        //function createWebsite(website) {
          //  website.developerId = model.userId;
            //websiteService.createWebsite(website);
            //$location.url('/user/' + model.userId + '/website');
        //}
        
        function updateWebsite(website) {
           // websiteService.updateWebsite(model.website._id, website);
            //$location.url('/user/' + model.userId + '/website');
            websiteService.updateWebsite(model.website._id, website)
            //$location.url("/user/" + model.user._id);
                .then(function () {
                    $location.url('/user/' + model.userId + '/website')
                });
        }

        function deleteWebsite(website) {
            websiteService
                .deleteWebsite(model.website._id)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website');
                });
            //websiteService.deleteWebsite(websiteId);
            //$location.url('/user/' + model.userId + '/website');
        }

    }

})();
