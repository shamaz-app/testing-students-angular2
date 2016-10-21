/**
 * Created by ��������� on 08.09.2016.
 */
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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.serverUrl = 'http://localhost:8081';
    }
    AuthService.prototype.isAuthentificated = function () {
        return localStorage.getItem('access_token') !== null;
    };
    AuthService.prototype.doLogin = function (login, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic dGE6dGE=');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        return this.http.post(this.serverUrl + '/api/login', AuthService.getRequestBodyForAuth(login, password), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('refresh_token', response.refresh_token);
            localStorage.setItem('authorities', response.authorities);
            _this.router.navigate(['home']);
        }, function (error) {
            _this.errorMessage = error;
            localStorage.clear();
            console.log(error.text());
        });
    };
    AuthService.prototype.doLogout = function () {
        localStorage.clear();
    };
    AuthService.getRequestBodyForAuth = function (login, password) {
        return 'grant_type=password'
            + '&username=' + login
            + '&password=' + password;
    };
    ;
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map