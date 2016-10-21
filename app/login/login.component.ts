/**
 * Created by Анастасия on 08.09.2016.
 */

import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from '../login/auth.service';

@Component({
    selector: 'login',
    templateUrl: './app/login/login.component.html'
})

export class LoginComponent {
    constructor(public authService: AuthService, public router: Router) {
        if (this.authService.isAuthentificated()) {
            this.router.navigate(['home']);
        }
    }



    doLogin(login: string, password: string) {
        this.authService.doLogin(login, password);
    }

}