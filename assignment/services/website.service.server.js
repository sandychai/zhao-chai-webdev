var app = require('../../express');

app.get('/api/assignment/user/:userId/website', findAllWebsitesForUser);
app.get('/api/assignment/user/:userId/website/:websiteId', findWebsiteById);
app.post('/api/assignment/user/:userId/website', createWebsite);
app.put('/api/assignment/user/:userId/website/:websiteId', updateWebsite);
app.delete('/api/assignment/user/:userId/website/:websiteId', deleteWebsite);

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic  Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

var websiteModel = require("../models/websites/website.model.server");

function findWebsiteById(req, res) {

    return websiteModel
        .findWebsiteById(req.params.websiteId)
        .then(function (websiteDoc) {
            res.json(websiteDoc)
        }, function (err) {
            res.sendStatus(500).send(err);
        })

}

function findAllWebsitesForUser(req, res) {
    // userModel
    //     .findAllWebsitesForUser(req.params.userId)
    //     .then(function (websites) {
    //         res.json(websites)
    //     })

    var userId = req.params.userId;

    return websiteModel
        .findAllWebsitesForUser(userId)
        .then(function (websites) {
            res.json(websites);
        })
}

function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;
    //console.log("server");
    //console.log(website);

    return websiteModel
        .createWebsiteForUser(userId, website)
        .then(function (websiteDoc) {
            res.json(websiteDoc);
        }, function (err) {
            res.statusCode(500).send(err);
        })

}

function updateWebsite(req, res) {

    var websiteId = req.params.websiteId;
    var website = req.body;

    return websiteModel
        .updateWebsite(websiteId, website)
        .then(function (website) {
            res.json(website)
        })

}

function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    websiteModel
        .deleteWebsite(websiteId)
        .then(function (status) {
            res.json(status);
        });
}