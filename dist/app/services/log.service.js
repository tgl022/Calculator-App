"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var LogService = (function () {
    function LogService(http) {
        this.http = http;
        this.logsUrl = '/log';
    }
    LogService.prototype.getLogs = function () {
        console.log('Get log called in service');
        return this.http.get(this.logsUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    LogService.prototype.addLog = function (body) {
        // let bodyString = JSON.stringify(body);
        // let headers      = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.logsUrl, body)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Handle any errors from the API
     */
    LogService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + err.statusText + " || ''} " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Rx_1.Observable.throw(errMessage);
    };
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map