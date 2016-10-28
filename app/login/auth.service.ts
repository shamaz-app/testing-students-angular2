/**
 * Created by ��������� on 08.09.2016.
 */


import {Headers, Http} from '@angular/http';

import {Injectable} from '@angular/core'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


    private serverUrl = 'http://localhost:8089';
    public errorMessage: string;

    constructor(public http: Http, public router: Router) {  }

    isAuthentificated(): boolean {
        return localStorage.getItem('access_token') !== null;
    }

    doLogin(login: string, password: string) {
        let headers = new Headers();
        headers.append('Authorization', 'Basic dGE6dGE=');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

        return this.http.post(this.serverUrl + '/api/login', AuthService.getRequestBodyForAuth(login, password), {headers})
            .map(res => res.json())
            .subscribe(
                response => {
                    localStorage.setItem('access_token', response.access_token);
                    localStorage.setItem('refresh_token', response.refresh_token);
                    localStorage.setItem('authorities', response.authorities);
                    this.router.navigate(['home']);
                },
                error => {
                    this.errorMessage = error;
                    localStorage.clear();
                    console.log(error.text());
                }
            );
    }

    doLogout() {
        localStorage.clear();
    }

    private static getRequestBodyForAuth(login: string, password: string): string {

        return 'grant_type=password'
            + '&username=' + login
            + '&password=' + password;
    };
}