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
var calculator_1 = require("./calculator");
var AppComponent = (function () {
    function AppComponent(calculator) {
        this.calculator = calculator;
        this.logs = [
            { message: '1+1= 1' },
            { message: '1+1= 2' },
            { message: '1+1= 3' },
            { message: '1+1= 4' },
            { message: '1+1= 5' },
            { message: '1+1= 6' },
            { message: '1+1= 7' },
            { message: '1+1= 8' },
            { message: '1+1= 9' },
            { message: '1+1= 10' }
        ];
        this.evalString = '';
    }
    AppComponent.prototype.calculate = function () {
        this.evalString += this.calculator.solution;
        console.log(this.evalString);
    };
    AppComponent.prototype.addToString = function (char) {
        this.evalString += char;
        if (char === '=')
            this.calculate();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [calculator_1.Calculator])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map