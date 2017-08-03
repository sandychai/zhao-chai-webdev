(function () {
    angular
        .module("WAM")
        .factory("pageService", pageService);

    function pageService($http) {


        var api = {
            createPage:createPage,
            findPageByWebsiteId:findPageByWebsiteId,
            updatePage:updatePage,
            deletePage:deletePage,
            findPageById:findPageById
        };

        return api;

        function createPage(page) {
            //page._id = (new Date()).getTime() + "";
            //pages.push(page);
            var url = '/api/assignment/user/userId/website/websiteId/page';
            return $http.post(url,page)
                .then(function (response) {
                    return response.data;
                })
        }

        function updatePage(pageId, page) {
            //var oldPage = pages.find(function (page) {
            //    return page._id ===pageId;
            //});
           // oldPage.name = page.name;
           // oldPage.description = page.description;
            var url = '/api/assignment/user/userId/website/websiteId/page/' + pageId;
            return $http.put(url, page)
                .then(function (response) {
                    return response.data;
                })
        }

        function deletePage(pageId) {
            //var page = pages.find(function (page) {
              //  return page._id ===pageId;
            //});
            //var index = pages.indexOf(page);
            //pages.splice(index,1);
            var url = '/api/assignment/user/userId/website/websiteId/page/' + pageId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function findPageById(pageId) {
            //return pages.find(function (page) {
              //  return page._id === pageId;
            //})
            var url = '/api/assignment/user/userId/website/websiteId/page/' + pageId;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })
        }

        function findPageByWebsiteId(websiteId) {
           // var resultSet = [];
            //for(var p in pages){
              //  if(pages[p].websiteId === websiteId){
                //    resultSet.push(pages[p]);
                //}
            //}
            //return resultSet;
            var url = '/api/assignment/user/userId/website/' + websiteId + '/page';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();