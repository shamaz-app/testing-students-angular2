/**
 * Created by Анастасия on 08.09.2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component'
import {TestComponent} from './test/test.component'
import {ThemesComponent} from './test/themes.component'
import {HomeComponent} from './home.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '*',
        component: HomeComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'test/:testId',
        component: ThemesComponent
    }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);