"use strict";
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
mongoose_1.default.Promise = global.Promise;
var logSchema = new Schema({
    message: {
        type: String,
        required: true
    }
});
//encription logic
//
var Log = mongoose_1.default.model('Log', logSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Log;
//# sourceMappingURL=Log.js.map