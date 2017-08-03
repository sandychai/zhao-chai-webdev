var app = require('../../express');

app.get('/api/assignment/user/:userId/website/:websiteId/page/:pageId', findPageById);
app.get('/api/assignment/user/:userId/website/:websiteId/page', findPageByWebsiteId);
app.post('/api/assignment/user/:userId/website/:websiteId/page', createPage);
app.put('/api/assignment/user/:userId/website/:websiteId/page/:pageId', updatePage);
app.delete('/api/assignment/user/:userId/website/:websiteId/page/:pageId', deletePage);

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
]

function findPageById(req, res) {
    var userId =  req.params['userId'];
    var websiteId =  req.params['websiteId'];
    var pageId =  req.params['pageId'];
    var page = pages.find(function (page) {
        return page._id === pageId;
    });
    res.send(page);
}

function findPageByWebsiteId(req, res) {
    var resultSet = [];
    for(var p in pages){
        if(pages[p].websiteId === req.params.websiteId){
            resultSet.push(pages[p]);
        }
    }
    res.json(resultSet);
}

function createPage(req, res) {
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    //  console.log('user');
    pages.push(page);
    res.send(page);
}

function updatePage(req, res) {
    var page = req.body;
    var userId = req.params.userId;
    var websiteId = req.params.websiteId;
    var pageId = req.params.pageId;
    for (var p in pages){
        if(pageId === pages[p]._id){
            pages[p].name = page.name;
            pages[p].description = page.description;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deletePage(req, res) {

    var pageId = req.params.pageId;
    var page = pages.find(function (page) {
        return page._id ===pageId;
    });
    var index = pages.indexOf(page);
    pages.splice(index,1);
    res.sendStatus(200);
}