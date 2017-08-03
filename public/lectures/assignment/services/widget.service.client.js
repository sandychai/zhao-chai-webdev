(function () {
    angular
        .module("WAM")
        .factory("widgetService", widgetService);

    function widgetService($http) {


        var api = {
            createWidget:createWidget,
            findWidgetsByPageId:findWidgetsByPageId,
            updateWidget:updateWidget,
            deleteWidget:deleteWidget,
            findWidgetById:findWidgetById,
            getWidgetType:getWidgetType
        };

        return api;

        function createWidget(widget) {
            //widget._id = (new Date()).getTime() + "";
            //widgets.push(widget);
            var url = '/api/assignment/user/userId/website/websiteId/page/pageId/widget';
            return $http.post(url,widget)
                .then(function (response) {
                    return response.data;
                })
        }

        function getWidgetType(widgetId) {
            //var widget = widgets.find(function (widget) {
              //  return widget._id ===widgetId;
            //});

            //return widget.widgetType;
            var url = '/api/assignment/user/userId/website/websiteId/page/pageId/widget/' + widgetId;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })
        }

        function updateWidget(widgetId, widget) {
            //var oldWidget = widgets.find(function (widget) {
              //  return widget._id ===widgetId;
            //});
            //oldWidget.name = widget.name;
            //oldWidget.text = widget.text;
            //oldWidget.size = widget.size;
            //oldWidget.width = widget.width;
            //oldWidget.url = widget.url;
            var url = '/api/assignment/user/userId/website/websiteId/page/pageId/widget/' + widgetId;
            return $http.put(url, widget)
                .then(function (response) {
                    return response.data;
                })
        }

        function deleteWidget(widgetId) {
            //var widget = widgets.find(function (widget) {
              //  return widget._id ===widgetId;
            //});
            //var index = widgets.indexOf(widget);
            //widgets.splice(index,1);
            var url = '/api/assignment/user/userId/website/websiteId/page/pageId/widget/' + widgetId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function findWidgetById(widgetId) {
            //return widgets.find(function (widget) {
              //  return widget._id === widgetId;
            //})
            var url = '/api/assignment/user/userId/website/websiteId/page/pageId/widget/' + widgetId;
            return $http.get(url)
                .then(function (response ) {
                    return response.data;
                })
        }

        function findWidgetsByPageId(pageId) {
            //var resultSet = [];
            //for(var w in widgets){
              //  if(widgets[w].pageId === pageId){
                //    resultSet.push(widgets[w]);
                //}
            //}
            //return resultSet;
            var url = '/api/assignment/user/userId/website/websiteId/page/' + pageId + '/widget';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();