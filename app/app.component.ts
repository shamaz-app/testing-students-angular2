/**
 * Created by Анастасия on 06.09.2016.
 */
import {Component} from '@angular/core';


import {AuthService} from './login/auth.service';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    private teacherRole: 'ROLE_ADMIN';
    private studentRole: 'ROLE_STUDENT';
    constructor(public authService: AuthService) {
    }

    doLogout() {
        this.authService.doLogout();
    }

    isShowLogin(): boolean {
        return !this.authService.isAuthentificated();
    }

    isTestPermissioned(): boolean {
        return localStorage.getItem('authorities') == this.teacherRole;
    }
}
