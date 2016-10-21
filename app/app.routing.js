"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var test_component_1 = require('./test/test.component');
var themes_component_1 = require('./test/themes.component');
var home_component_1 = require('./home.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '*',
        component: home_component_1.HomeComponent
    },
    {
        path: 'test',
        component: test_component_1.TestComponent
    },
    {
        path: 'test/:testId',
        component: themes_component_1.ThemesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map