"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
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
        // users: User[] = [
        //   { id: 25, name: 'Chris', username: 'sevilayha' },
        //   { id: 26, name: 'Nick', username: 'whatnicktweets' },
        //   { id: 27, name: 'Holly', username: 'hollylawly' }
        // ];
        // activeUser: User;
        //
        // selectUser(user) {
        //   this.activeUser = user;
        //   console.log(this.activeUser);
        // }
        //
        // onUserCreated(event) {
        //   this.users.push(event.user);
        // }
    }
    AppComponent.prototype.calculate = function (exp) {
        console.log(exp);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map