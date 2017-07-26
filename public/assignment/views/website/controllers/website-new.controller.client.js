(function () {
    angular
        .module('WAM')
        .controller('websiteNewController',websiteNewController);

    function websiteNewController($routeParams, websiteService, $location) {
        console.log("load websiteNew")
        var model = this;
        model.userId = $routeParams['userId'];
        model.createWebsite = createWebsite;

        function init() {
            model.websites = websiteService.findAllWebsitesForUser(model.userId);
        }

        init();
        
        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/' + model.userId + '/website');
        }

    }

})();
