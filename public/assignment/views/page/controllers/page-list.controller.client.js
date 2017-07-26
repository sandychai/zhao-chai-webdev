(function () {
    angular
        .module('WAM')
        .controller('pageListController',pageListController);

    function pageListController($routeParams, pageService) {
        console.log("load pageList")
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];


        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }

        init();

    }

})();
