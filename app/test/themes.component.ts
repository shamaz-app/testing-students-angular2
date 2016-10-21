/**
 * Created by Анастасия on 13.09.2016.
 */


import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {HttpService} from '../http.service';
import {Theme} from '../test/theme';
import {Question} from '../test/question';
import {PaginationQuestion} from "./question/pagination-question";

@Component({
    selector: 'themes-list',
    templateUrl: './app/test/themes.component.html',
    styleUrls: ['./app/test/themes.component.css']
})
export class ThemesComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private router: Router,
                private httpService: HttpService) {
        this.themeForEdit = new Theme();
    }

    public testId: string;
    public themeId: string;
    public themes: Theme[];
    public themeForEdit: Theme;
    public addOrUpdateMode: boolean;
    public paginationQuestion: PaginationQuestion;

    public selectedQuestion: Question;

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.testId = params['testId'];
        });
        this.getThemes();
        this.getQuestions();
    }

    getThemes() {
        this.httpService.getThemes(this.testId)
            .subscribe(
                response => {
                    this.themes = response.content;
                }
            );
    }

    onActionClickSelectMenu(themeId) {
        this.themeId = themeId;
        this.selectedQuestion = null;
        this.getQuestions();
    }

    getQuestions() {
        this.httpService.getQuestions(this.testId, this.themeId)
            .subscribe(
                res => {
                    this.paginationQuestion = res;
                },
                err => {
                    this.httpService.handleError(err);
                }
            );
    }



    addOrEdit(theme: Theme) {
        if (theme) {
            this.themeForEdit = new Theme();
            this.themeForEdit.id = theme.id;
            this.themeForEdit.theme = theme.theme;
            this.themeForEdit.testId = theme.testId;
        } else {
            this.themeForEdit = new Theme();
        }
        this.addOrUpdateMode = true;
    }

    saveTheme() {
        this.themeForEdit.testId = this.testId;
        this.httpService.putTheme(this.themeForEdit).subscribe(
            response => {
                this.getThemes();
            }
        );

        this.cancelAddOrEdit();
    }

    cancelAddOrEdit() {
        this.addOrUpdateMode = false;
        this.themeForEdit = new Theme();
    }

    deleteTheme(theme: Theme) {
        if (confirm('Вы действительно хотите удалить тему ' + theme.theme) + '?') {

            this.httpService.deleteTheme(theme)
                .subscribe(
                    response => {
                        this.getThemes();
                    }
                );

        } else {
            this.cancelAddOrEdit();
        }
    }

    onSelectTest(question: Question) {
        this.selectedQuestion = question;
    }

    onSaveQuestion() {
        this.httpService.putQuestion(this.selectedQuestion).subscribe(
            response => {
                this.getQuestions();
            }
        );
    }
}