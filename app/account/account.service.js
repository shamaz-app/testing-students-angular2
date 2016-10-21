/**
 * Created by Анастасия on 06.09.2016.
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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.accountUrl = 'http://localhost:8081/api/account';
    }
    AccountService.prototype.getAccounts = function () {
        return this.http.get(this.accountUrl)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.addAccount = function (account) {
        var body = JSON.stringify({ account: account });
        var options = new http_1.RequestOptions({ headers: this.headers });
        this.http.put(this.accountUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    // create(account: Account): Promise<Account> {
    //     return this.http
    //         .put(this.accountUrl, JSON.stringify(account), {headers: this.headers})
    //         .toPromise()
    //         .then(() => account)
    //         .catch(this.handleError);
    // }
    AccountService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map