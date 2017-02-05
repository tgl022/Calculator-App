"use strict";
var models_1 = require("./../models");
var logController = {};
logController.get = function (req, res) {
    res.json({
        message: 'Welcome to the API!!!'
    });
};
logController.post = function (req, res) {
    var message = req.body.message;
    //Validation
    var log = new models_1.default.Log({
        message: message
    });
    log.save().then(function (newLog) {
        res.status(200).json({
            success: true,
            date: newLog
        });
    }).catch(function (err) {
        res.status(500).json({
            message: err
        });
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logController;
//# sourceMappingURL=logController.js.map