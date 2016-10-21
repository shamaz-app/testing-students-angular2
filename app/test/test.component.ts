/**
 * Created by Анастасия on 12.09.2016.
 */


import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HttpService} from '../http.service';
import {PaginationTest} from './pagination-test';
import {Test} from '../test/test';

@Component({
    selector: 'test-list',
    templateUrl: './app/test/test.component.html',
    inputs: ['testForEdit'],
    styleUrls: ['./app/test/test.component.css']
})
export class TestComponent implements OnInit {
    public paginationTest: PaginationTest;
    public testForEdit: Test;
    public addOrUpdateMode = false;

    constructor(public httpService: HttpService, private router: Router) {
        this.testForEdit = new Test();
    }

    addOrEdit(test: Test) {
        if (test) {
            this.testForEdit = new Test();
            this.testForEdit.description = test.description;
            this.testForEdit.id = test.id;
        } else {
            this.testForEdit = new Test();
        }
        this.addOrUpdateMode = true;
    }

    saveTest() {
        this.httpService.pushTest(this.testForEdit).subscribe(
            res => {
                this.getTestList(0);
            },
            err => {
                this.httpService.handleError(err);
            }
        );

        this.cancelAddOrEdit();
    }

    cancelAddOrEdit() {
        this.addOrUpdateMode = false;
        this.testForEdit.description = '';
        this.testForEdit.id = '';
    }

    //init function
    ngOnInit() {
        this.getTestList(0);
    }

    getTestList(page: number) {
        this.httpService.getTests('', page)
            .subscribe(
                res => {
                    this.paginationTest = res;
                },
                err => {
                    this.httpService.handleError(err);
                }
            );
    }

    deleteTest(test: Test) {
        if (confirm('Вы действительно хотите удалить тест ' + test.description + '?')) {

            this.httpService.deleteTest(test)
                .subscribe(
                    response => {
                        this.getTestList(0);
                    }
                );

        } else {
            this.cancelAddOrEdit();
        }
    }

    goToThemes(test: Test) {
        if (test.id) {
            this.router.navigate(['test', test.id]);
        }
    }

    pageChanged(event: any): void {
        this.getTestList(event - 1);
    };
}