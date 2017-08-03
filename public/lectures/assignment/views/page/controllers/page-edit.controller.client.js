(function () {
    angular
        .module('WAM')
        .controller('pageEditController',pageEditController);

    function pageEditController($routeParams, pageService, $location) {

        console.log("load pageEdit")
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        //model.createPage = createPage;
        model.updatePage = updatePage;
        model.deletePage = deletePage

        function init() {
            //model.pages = pageService.findPageByWebsiteId(model.websiteId);
            //model.page = angular.copy(pageService.findPageById(model.pageId))
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                })
            pageService
                .findPageById(model.pageId)
                .then(function (page) {
                    model.page = page;
                })
        }

        init();

        //function createPage(website) {
          //  website.developerId = model.userId;
            //pageService.createPage(website);
            //$location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
        //}

        function updatePage(page) {
            //pageService.updatePage(model.page._id, page);
            //$location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page');
            pageService.updatePage(model.page._id, page)
            //$location.url("/user/" + model.user._id);
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page')
                });
        }

        function deletePage(pageId) {
            //pageService.deletePage(pageId);
            //$location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page');
            pageService
                .deletePage(model.page._id)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page');
                });
        }

    }

})();
