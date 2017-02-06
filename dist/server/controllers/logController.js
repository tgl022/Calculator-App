"use strict";
var models_1 = require("./../models");
var logController = {};
logController.get = function (req, res) {
    models_1.default.Log.find({}).sort({ _id: -1 }).limit(10).then(function (logs) {
        res.status(200).json({
            success: true,
            data: logs
        });
    }).catch(function (err) {
        res.status(500).json({
            message: err
        });
    });
};
logController.post = function (req, res) {
    var message = req.body.message;
    var log = new models_1.default.Log({
        message: message
    });
    log.save().then(function (newLog) {
        res.status(200).json({
            success: true,
            data: newLog
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