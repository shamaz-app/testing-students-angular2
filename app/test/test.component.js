/**
 * Created by Анастасия on 12.09.2016.
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
var router_1 = require('@angular/router');
var http_service_1 = require('../http.service');
var test_1 = require('../test/test');
var TestComponent = (function () {
    function TestComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.addOrUpdateMode = false;
        this.testForEdit = new test_1.Test();
    }
    TestComponent.prototype.addOrEdit = function (test) {
        if (test) {
            this.testForEdit = new test_1.Test();
            this.testForEdit.description = test.description;
            this.testForEdit.id = test.id;
        }
        else {
            this.testForEdit = new test_1.Test();
        }
        this.addOrUpdateMode = true;
    };
    TestComponent.prototype.saveTest = function () {
        var _this = this;
        this.httpService.pushTest(this.testForEdit).subscribe(function (res) {
            _this.getTestList(0);
        }, function (err) {
            _this.httpService.handleError(err);
        });
        this.cancelAddOrEdit();
    };
    TestComponent.prototype.cancelAddOrEdit = function () {
        this.addOrUpdateMode = false;
        this.testForEdit.description = '';
        this.testForEdit.id = '';
    };
    //init function
    TestComponent.prototype.ngOnInit = function () {
        this.getTestList(0);
    };
    TestComponent.prototype.getTestList = function (page) {
        var _this = this;
        this.httpService.getTests('', page)
            .subscribe(function (res) {
            _this.paginationTest = res;
        }, function (err) {
            _this.httpService.handleError(err);
        });
    };
    TestComponent.prototype.deleteTest = function (test) {
        var _this = this;
        if (confirm('Вы действительно хотите удалить тест ' + test.description + '?')) {
            this.httpService.deleteTest(test)
                .subscribe(function (response) {
                _this.getTestList(0);
            });
        }
        else {
            this.cancelAddOrEdit();
        }
    };
    TestComponent.prototype.goToThemes = function (test) {
        if (test.id) {
            this.router.navigate(['test', test.id]);
        }
    };
    TestComponent.prototype.pageChanged = function (event) {
        this.getTestList(event - 1);
    };
    ;
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-list',
            templateUrl: './app/test/test.component.html',
            inputs: ['testForEdit'],
            styleUrls: ['./app/test/test.component.css']
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.Router])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map