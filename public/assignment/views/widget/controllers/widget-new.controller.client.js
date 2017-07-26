(function () {
    angular
        .module('WAM')
        .controller('widgetNewController',widgetNewController);

    function widgetNewController($routeParams, widgetService, $location) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        //model.widgetType = $routeParams['widgetType']
        model.widgetId = $routeParams['widgetId'];
        //model.widgetType;

        model.createWidget = createWidget;
        model.getWidgetType = getWidgetType;

        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.pageId);
            //model.widget = widgetService.findWidgetById(model.widgetId);
            //model.widgetType = widgetService.getWidgetType(model.widgetId);
        }

        init();

        function getWidgetType(widgetId) {
            widgetService.getWidgetType(widgetId);
        }

        function createWidget(string) {
            var widget = {
                pageId:model.pageId,
                widgetType:string,
                _id:(new Date()).getTime() + ""
            }
            widgetService.createWidget(widget);
            $location.url('/user/' + model.userId + '/website/' + model.websiteId +
                '/page/' + model.pageId + '/widget/' + widget._id);
        }

    }

})();
