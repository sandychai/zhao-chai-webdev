(function () {
    angular
        .module("WAM")
        .controller("widgetListController",widgetListController);


    
    function widgetListController($sce,$routeParams,widgetService) {

        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        model.trustThisContent = trustThisContent;
        model.getYoutubeEmbedUrl = getYoutubeEmbedUrl;
        
        function trustThisContent(html) {
            return $sce.trustAsHtml(html);
        }
        
        function getYoutubeEmbedUrl(youTubeLink) {
            var embedUrl = 'https://www.youtube.com/embed/';
            var youTubeLinkParts = youTubeLink.split('/');
            var id = youTubeLinkParts[youTubeLinkParts.length - 1];
            embedUrl += id;
            //console.log(embedUrl);
            return $sce.trustAsResourceUrl(embedUrl);
        }

        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.pageId);
        }

        init();

    }
})();