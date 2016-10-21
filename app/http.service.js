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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var HttpService = (function () {
    function HttpService(http, router) {
        this.http = http;
        this.router = router;
        this.serverUrl = 'http://localhost:8081';
    }
    ;
    HttpService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    };
    HttpService.prototype.getTests = function (filterByName, page) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);
        return this.http.get(this.serverUrl + '/api/test?page=' + page, { headers: headers })
            .map(function (r) { return r.json(); }).catch(this.handleExceprion);
    };
    HttpService.prototype.pushTest = function (testForPut) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.createAuthorizationHeader(headers);
        return this.http.put(this.serverUrl + '/api/test', JSON.stringify({
            id: testForPut.id,
            description: testForPut.description
        }), { headers: headers });
    };
    HttpService.prototype.deleteTest = function (test) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.serverUrl + '/api/test/' + test.id, { headers: headers });
    };
    //Themes functions
    HttpService.prototype.getThemes = function (testId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);
        return this.http.get(this.serverUrl + '/api/test/theme?testId=' + testId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.getQuestions = function (testId, themeId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);
        if (themeId == null || themeId == undefined) {
            return this.http.get(this.serverUrl + '/api/test/question?testId=' + testId, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else {
            return this.http.get(this.serverUrl + '/api/test/question?themeId=' + themeId + '&testId=' + testId, { headers: headers })
                .map(function (res) { return res.json(); });
        }
    };
    HttpService.prototype.putQuestion = function (question) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.createAuthorizationHeader(headers);
        return this.http.put(this.serverUrl + '/api/test/question', JSON.stringify(question), { headers: headers });
    };
    HttpService.prototype.putTheme = function (themeForPut) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.createAuthorizationHeader(headers);
        return this.http.put(this.serverUrl + '/api/test/theme', JSON.stringify({
            id: themeForPut.id,
            theme: themeForPut.theme,
            testId: themeForPut.testId
        }), { headers: headers });
    };
    HttpService.prototype.deleteTheme = function (theme) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.serverUrl + '/api/test/theme/' + theme.id, { headers: headers });
    };
    HttpService.prototype.handleError = function (status) {
        if (status == "401 - Unauthorized") {
            localStorage.clear();
            this.router.navigate(['login']);
        }
        // if (error == 'access_denied') {
        //     //need access denied page for this error
        //     this.router.navigate(['home']);
        // }
        // if (error == 'invalid_token') {
        //     // to login page if bad token and clear storage
        //
        // }
    };
    HttpService.prototype.handleExceprion = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map