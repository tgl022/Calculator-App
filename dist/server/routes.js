"use strict";
var express_1 = require("express");
//Controlleres
var logController_1 = require("./controllers/logController");
var routes = express_1.default.Router();
//Log Routes
routes.get('/log', logController_1.default.get);
routes.post('/log', logController_1.default.post);
//Front-end Rote
routes.get("*", function (req, res) {
    // Angular will handle the page changes on front-end
    res.sendFile('index.html', { 'root': './' });
    // res.sendFile(path.join(__dirname, './../index.html'));
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routes;
//# sourceMappingURL=routes.js.map