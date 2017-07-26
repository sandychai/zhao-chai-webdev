(function () {
    angular
        .module('WAM')
        .controller('websiteEditController',websiteEditController);

    function websiteEditController($routeParams, websiteService, $location) {


        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];

        model.createWebsite = createWebsite;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
            model.website = angular.copy(websiteService.findWebsiteById(model.websiteId))
        }

        init();

        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/' + model.userId + '/website');
        }
        
        function updateWebsite(website) {
            websiteService.updateWebsite(model.website._id, website);
            $location.url('/user/' + model.userId + '/website');
        }

        function deleteWebsite(websiteId) {
            websiteService.deleteWebsite(websiteId);
            $location.url('/user/' + model.userId + '/website');
        }

    }

})();
