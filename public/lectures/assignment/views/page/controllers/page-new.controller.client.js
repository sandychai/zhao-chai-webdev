(function () {
    angular
        .module('WAM')
        .controller('pageNewController',pageNewController);

    function pageNewController($routeParams, pageService, $location) {
        console.log("load pageNew")
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.createPage = createPage;

        function init() {
            //model.pages = pageService.findPageByWebsiteId(model.websiteId);
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();

        function createPage(page) {
            //page.websiteId = model.websiteId;
            //pageService.createPage(page);
            //$location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
            //website.developerId = model.userId;
            page.websiteId = model.websiteId;
            pageService
                .createPage(page)
                .then(function (page) {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
                })
        }

    }

})();
