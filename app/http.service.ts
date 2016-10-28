/**
 * Created by Анастасия on 12.09.2016.
 */


import {Headers, Http, URLSearchParams, Response} from '@angular/http';
import {Injectable} from '@angular/core'
import {Router} from '@angular/router';
import {PaginationTest} from './test/pagination-test';

import {Test} from './test/test'
import {Theme} from './test/theme'

import {Observable}        from 'rxjs/Observable';
import {Question} from "./test/question";

@Injectable()
export class HttpService {

    constructor(public http: Http, public router: Router) {
    };

    private serverUrl = 'http://localhost:8089';

    private createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    }

    getTests(filterByName: string, page: number): Observable<PaginationTest> {
        let headers = new Headers();

        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);

        return this.http.get(this.serverUrl + '/api/test?page=' + page, {headers})
            .map((r: Response) => r.json() as PaginationTest).catch(this.handleExceprion);
    }

    pushTest(testForPut: Test) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.createAuthorizationHeader(headers);


        return this.http.put(this.serverUrl + '/api/test', JSON.stringify({
            id: testForPut.id,
            description: testForPut.description
        }), {headers});
    }

    deleteTest(test: Test) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);

        return this.http.delete(this.serverUrl + '/api/test/' + test.id, {headers});
    }

    //Themes functions
    getThemes(testId: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);

        return this.http.get(this.serverUrl + '/api/test/theme?testId=' + testId, {headers})
            .map(res => res.json()
            );
    }

    getQuestions(testId: string, themeId: string, questionFilter: string, page: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);
            return this.http.get(this.getUrlForGetQuestions(testId, themeId, questionFilter, page), {headers})
                .map(res => res.json()
                );
    }

    private getUrlForGetQuestions(testId: string, themeId: string, questionFilter: string, page: number): string {
        let url = this.serverUrl;

        if (themeId == null || themeId == undefined) {
            url += '/api/test/question?testId=' + testId;
        } else {
            url += '/api/test/question?themeId=' + themeId;
        }
        if (questionFilter !== undefined && questionFilter.length > 0) {
            url += '&questionFilter=' + questionFilter;
        }
        if (page !== undefined) {
            url += '&page=' + page;
        }
        return url;
    }

    putQuestion(question: Question) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.createAuthorizationHeader(headers);
        return this.http.put(this.serverUrl + '/api/test/question', JSON.stringify(question), {headers});
    }

    putTheme(themeForPut: Theme) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.createAuthorizationHeader(headers);


        return this.http.put(this.serverUrl + '/api/test/theme', JSON.stringify({
            id: themeForPut.id,
            theme: themeForPut.theme,
            testId: themeForPut.testId
        }), {headers});
    }

    deleteTheme(theme: Theme) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);

        return this.http.delete(this.serverUrl + '/api/test/theme/' + theme.id, {headers});
    }

    deleteQuestion(question: Question) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        this.createAuthorizationHeader(headers);

        return this.http.delete(this.serverUrl + '/api/test/question/' + question.id, {headers});
    }

    handleError(status: string) {
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
    }

    private handleExceprion(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
