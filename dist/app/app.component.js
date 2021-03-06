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
var calculator_service_1 = require("./services/calculator.service");
var log_service_1 = require("./services/log.service");
var AppComponent = (function () {
    function AppComponent(calculatorService, logService) {
        this.calculatorService = calculatorService;
        this.logService = logService;
        this.evalString = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.getLogs().subscribe(function (data) {
            _this.logs = data;
        });
        console.log('Logs loaded');
    };
    AppComponent.prototype.updateLogs = function () {
        var _this = this;
        //get last 10 logs
        this.logService.getLogs().subscribe(function (data) {
            _this.logs = data;
        });
    };
    AppComponent.prototype.clearScreen = function () {
        this.evalString = '';
    };
    AppComponent.prototype.addToString = function (char) {
        if (char == '=') {
            var solution = this.calculatorService.eval(this.evalString);
            this.pushLog(this.evalString + '= ' + solution);
            this.evalString = solution;
        }
        else {
            this.evalString += char;
        }
    };
    AppComponent.prototype.pushLog = function (logMessage) {
        //push a new log
        var log = {
            message: logMessage
        };
        this.logService.addLog(log)
            .subscribe(function (log) {
            console.log("Pushed new log: " + logMessage);
        });
        this.updateLogs();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [calculator_service_1.CalculatorService,
        log_service_1.LogService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map