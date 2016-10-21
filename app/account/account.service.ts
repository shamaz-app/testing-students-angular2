/**
 * Created by Анастасия on 06.09.2016.
 */

import {Injectable}    from '@angular/core';
import {Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs';

import {Account} from './account';

@Injectable()
export class AccountService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private accountUrl = 'http://localhost:8081/api/account';


    constructor(private http: Http) {
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get(this.accountUrl)
            .map(res => res.json());
    }

    addAccount(account: Account) {
        let body = JSON.stringify({ account });
        let options = new RequestOptions({ headers: this.headers });

        this.http.put(this.accountUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    // create(account: Account): Promise<Account> {
    //     return this.http
    //         .put(this.accountUrl, JSON.stringify(account), {headers: this.headers})
    //         .toPromise()
    //         .then(() => account)
    //         .catch(this.handleError);
    // }

    private handleError(error: any) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}