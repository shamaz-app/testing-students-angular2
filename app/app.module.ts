/**
 * Created by Анастасия on 06.09.2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Ng2PaginationModule} from './ng2-pagination/dist/ng2-pagination';
import {AppComponent}   from './app.component';
import {AccountComponent}  from './account/account.component';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login/login.component';
import {TestComponent} from './test/test.component';
import {ThemesComponent} from './test/themes.component';
import {QuestionsComponent} from './test/questions.component';

import {AccountService} from './account/account.service';
import {AuthService} from './login/auth.service';
import {HttpService} from './http.service';


import { routing }              from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        Ng2PaginationModule
    ],
    declarations: [
        AppComponent,
        AccountComponent,
        HomeComponent,
        LoginComponent,
        TestComponent,
        ThemesComponent,
        QuestionsComponent
    ],
    providers: [
        AccountService,
        AuthService,
        HttpService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
