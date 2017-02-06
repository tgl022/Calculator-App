"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CalculatorService = (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.eval = function (exp) {
        var expArray = exp.split("");
        var solution = this.apply(expArray[1], parseInt(expArray[0]), parseInt(expArray[2])).toString();
        return solution;
    };
    CalculatorService.prototype.apply = function (op, left, right) {
        if (op == '+')
            return left + right;
        else if (op == '-')
            return left - right;
        else if (op == '*')
            return left * right;
        else if (op == '/')
            return left / right;
        else
            return 0;
    };
    return CalculatorService;
}());
CalculatorService = __decorate([
    core_1.Injectable()
], CalculatorService);
exports.CalculatorService = CalculatorService;
//# sourceMappingURL=calculator.service.js.map