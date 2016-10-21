/**
 * Created by Анастасия on 13.09.2016.
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
var theme_1 = require('../test/theme');
var ThemesComponent = (function () {
    function ThemesComponent(route, router, httpService) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.themeForEdit = new theme_1.Theme();
    }
    ThemesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.testId = params['testId'];
        });
        this.getThemes();
        this.getQuestions();
    };
    ThemesComponent.prototype.getThemes = function () {
        var _this = this;
        this.httpService.getThemes(this.testId)
            .subscribe(function (response) {
            _this.themes = response.content;
        });
    };
    ThemesComponent.prototype.onActionClickSelectMenu = function (themeId) {
        this.themeId = themeId;
        this.selectedQuestion = null;
        this.getQuestions();
    };
    ThemesComponent.prototype.getQuestions = function () {
        var _this = this;
        this.httpService.getQuestions(this.testId, this.themeId)
            .subscribe(function (res) {
            _this.paginationQuestion = res;
        }, function (err) {
            _this.httpService.handleError(err);
        });
    };
    ThemesComponent.prototype.addOrEdit = function (theme) {
        if (theme) {
            this.themeForEdit = new theme_1.Theme();
            this.themeForEdit.id = theme.id;
            this.themeForEdit.theme = theme.theme;
            this.themeForEdit.testId = theme.testId;
        }
        else {
            this.themeForEdit = new theme_1.Theme();
        }
        this.addOrUpdateMode = true;
    };
    ThemesComponent.prototype.saveTheme = function () {
        var _this = this;
        this.themeForEdit.testId = this.testId;
        this.httpService.putTheme(this.themeForEdit).subscribe(function (response) {
            _this.getThemes();
        });
        this.cancelAddOrEdit();
    };
    ThemesComponent.prototype.cancelAddOrEdit = function () {
        this.addOrUpdateMode = false;
        this.themeForEdit = new theme_1.Theme();
    };
    ThemesComponent.prototype.deleteTheme = function (theme) {
        var _this = this;
        if (confirm('Вы действительно хотите удалить тему ' + theme.theme) + '?') {
            this.httpService.deleteTheme(theme)
                .subscribe(function (response) {
                _this.getThemes();
            });
        }
        else {
            this.cancelAddOrEdit();
        }
    };
    ThemesComponent.prototype.onSelectTest = function (question) {
        this.selectedQuestion = question;
    };
    ThemesComponent.prototype.onSaveQuestion = function () {
        var _this = this;
        this.httpService.putQuestion(this.selectedQuestion).subscribe(function (response) {
            _this.getQuestions();
        });
    };
    ThemesComponent = __decorate([
        core_1.Component({
            selector: 'themes-list',
            templateUrl: './app/test/themes.component.html',
            styleUrls: ['./app/test/themes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, http_service_1.HttpService])
    ], ThemesComponent);
    return ThemesComponent;
}());
exports.ThemesComponent = ThemesComponent;
//# sourceMappingURL=themes.component.js.map