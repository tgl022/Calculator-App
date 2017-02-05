"use strict";
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var body_parser_1 = require("body-parser");
var path_1 = require("path");
var routes_1 = require("./routes");
mongoose_1.default.connect('mongodb://admin:admin@ds143449.mlab.com:43449/calculator', function () {
    console.log('Connected to MongoDB...');
});
var app = express_1.default();
//Middlesware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Point static path to dist
app.use(express_1.default.static(path_1.default.join(__dirname, './../')));
app.use('/', routes_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
//alternate
// require('./route')(app);
exports.default = app;
//# sourceMappingURL=app.js.map