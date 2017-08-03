(function () {
    angular
        .module('WAM')
        .controller('widgetEditController',widgetEditController);

    function widgetEditController($routeParams, widgetService, $location) {

        console.log("load widgetEdit")
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];
        model.widgetId = $routeParams['widgetId'];
        //model.widgetType = $routeParams['widgetType'];
        //model.widgetType;


        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget
        //model.getWidgetType = getWidgetType;

        function init() {
            //model.widgets = widgetService.findWidgetsByPageId(model.pageId);
            //model.widget = widgetService.findWidgetById(model.widgetId);
            //model.widgetType = widgetService.getWidgetType(model.widgetId);
            widgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (widgets) {
                    model.widgets = widgets;
                })
            widgetService
                .findWidgetById(model.widgetId)
                .then(function (widget) {
                    model.widget = widget;
                })
            widgetService
                .getWidgetType(model.widgetId)
                .then(function (widget) {
                    model.widgetType = widget.widgetType;
                })
        }

        init();



        //function getWidgetType(widgetId) {
         //   widgetService
         //       .getWidgetType(widgetId);
       // }

        function updateWidget(widget) {
            //widgetService.updateWidget(model.widget._id, widget);
            //$location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page/' + model.pageId + '/widget');
            widgetService
                .updateWidget(model.widget._id)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page/' + model.pageId + '/widget');
                });
        }

        function deleteWidget(widgetId) {
            //widgetService.deleteWidget(widgetId);
            //$location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page/' + model.pageId + '/widget');
            widgetService
                .deleteWidget(model.widget._id)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/'+ model.websiteId + '/page/' + model.pageId + '/widget');
                });
        }

    }

})();
