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
/**
 * Created by Анастасия on 06.09.2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var ng2_pagination_1 = require('./ng2-pagination/dist/ng2-pagination');
var app_component_1 = require('./app.component');
var account_component_1 = require('./account/account.component');
var home_component_1 = require('./home.component');
var login_component_1 = require('./login/login.component');
var test_component_1 = require('./test/test.component');
var themes_component_1 = require('./test/themes.component');
var questions_component_1 = require('./test/questions.component');
var account_service_1 = require('./account/account.service');
var auth_service_1 = require('./login/auth.service');
var http_service_1 = require('./http.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing,
                ng2_pagination_1.Ng2PaginationModule
            ],
            declarations: [
                app_component_1.AppComponent,
                account_component_1.AccountComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                test_component_1.TestComponent,
                themes_component_1.ThemesComponent,
                questions_component_1.QuestionsComponent
            ],
            providers: [
                account_service_1.AccountService,
                auth_service_1.AuthService,
                http_service_1.HttpService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map