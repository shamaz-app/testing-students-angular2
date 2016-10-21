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
var account_service_1 = require('./account.service');
require('./rxjs-operators');
var AccountComponent = (function () {
    function AccountComponent(accountService) {
        this.accountService = accountService;
        this.mode = 'Observable';
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountComponent.prototype.getAccounts = function () {
        var _this = this;
        this.accountService.getAccounts()
            .subscribe(function (response) {
            _this.accounts = response;
            console.log(_this.accounts);
        }, function (error) { return _this.errorMessage = error; });
    };
    AccountComponent.prototype.addAccount = function () {
        if (!this.account.login || !this.account.password) {
            return;
        }
        this.accountService.addAccount(this.account);
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'accounts',
            templateUrl: 'app/account/account.component.html',
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map