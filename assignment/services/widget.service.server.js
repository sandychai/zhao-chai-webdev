var app = require('../../express');


var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../public/assignment/uploads' });

app.post ("/api/assignment/upload", upload.single('myFile'), uploadImage);
app.get('/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget', findWidgetsByPageId);
app.post('/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget', createWidget);
app.get('/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', findWidgetById);
//app.get('/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', getWidgetType);
app.put('/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', updateWidget);
app.delete('/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', deleteWidget);


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


    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;
        //widget = getWidgetById(widgetId);
        widget.url = '/public/assignment/uploads/' + filename;

        var callbackUrl = "/assignment/index.html#!/widget/" + widgetId;

        ;

        res.redirect(callbackUrl);
    }


function findWidgetById(req, res) {
    var userId =  req.params['userId'];
    var websiteId =  req.params['websiteId'];
    var pageId =  req.params['pageId'];
    var widgetId =  req.params['widgetId'];
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    res.send(widget);
}


function findWidgetsByPageId(req, res) {
    var resultSet = [];
    for(var w in widgets){
        if(widgets[w].pageId === req.params.pageId){
            resultSet.push(widgets[w]);
        }
    }
    res.json(resultSet);
}

function createWidget(req, res) {
    var widget = req.body;
    //widget._id = (new Date()).getTime() + "";
    //console.log('user');
    widgets.push(widget);
    res.send(widget);
}

function getWidgetType(req, res) {
    var userId =  req.params['userId'];
    var websiteId =  req.params['websiteId'];
    var pageId =  req.params['pageId'];
    var widgetId =  req.params['widgetId'];
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    res.send(widget.widgetType);
}

function updateWidget(req, res) {
    var widget = req.body;
    var userId = req.params.userId;
    var websiteId = req.params.websiteId;
    var pageId = req.params.pageId;
    var widgetId =  req.params.widgetId;
    for (var w in widgets){
        if(widgetId === widgets[w]._id){
            widgets[w].name = widget.name;
            widgets[w].text = widget.text;
            widgets[w].size = widget.size;
            widgets[w].width = widget.width;
            widgets[w].url = widget.url;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    var widget = widgets.find(function (widget) {
        return widget._id ===widgetId;
    });
    var index = widgets.indexOf(widget);
    widgets.splice(index,1);
    res.sendStatus(200);
}

