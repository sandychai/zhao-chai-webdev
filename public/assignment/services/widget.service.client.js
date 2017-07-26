(function () {
    angular
        .module("WAM")
        .factory("widgetService", widgetService);

    function widgetService() {

        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];


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
            widgets.push(widget);
        }

        function getWidgetType(widgetId) {
            var widget = widgets.find(function (widget) {
                return widget._id ===widgetId;
            });

            return widget.widgetType;
        }

        function updateWidget(widgetId, widget) {
            var oldWidget = widgets.find(function (widget) {
                return widget._id ===widgetId;
            });
            oldWidget.name = widget.name;
            oldWidget.text = widget.text;
            oldWidget.size = widget.size;
            oldWidget.width = widget.width;
            oldWidget.url = widget.url;
        }

        function deleteWidget(widgetId) {
            var widget = widgets.find(function (widget) {
                return widget._id ===widgetId;
            });
            var index = widgets.indexOf(widget);
            widgets.splice(index,1);
        }

        function findWidgetById(widgetId) {
            return widgets.find(function (widget) {
                return widget._id === widgetId;
            })
        }

        function findWidgetsByPageId(pageId) {
            var resultSet = [];
            for(var w in widgets){
                if(widgets[w].pageId === pageId){
                    resultSet.push(widgets[w]);
                }
            }
            return resultSet;
        }
    }
})();