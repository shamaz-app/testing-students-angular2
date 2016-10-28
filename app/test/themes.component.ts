/**
 * Created by Анастасия on 13.09.2016.
 */


import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {HttpService} from '../http.service';
import {Theme} from '../test/theme';
import {Question} from '../test/question';
import {PaginationQuestion} from "./question/pagination-question";
import {AnswerOption} from "./question/answer-option";

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
    public questionFilter: string;
    public paginationQuestion: PaginationQuestion;

    public selectedQuestion: Question;

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.testId = params['testId'];
        });
        this.getThemes();
        this.getQuestions(0);
    }

    getThemes() {
        this.httpService.getThemes(this.testId)
            .subscribe(
                response => {
                    this.themes = response;
                }
            );
    }

    onActionClickSelectMenu(themeId: string) {
        this.themeId = themeId;
        this.selectedQuestion = null;
        this.getQuestions(0);
    }

    onActionChangeThemeOfQuestion(theme: string) {
        this.selectedQuestion.themeDto.id = theme;
    }

    getQuestions(page: number) {
        this.httpService.getQuestions(this.testId, this.themeId, this.questionFilter, page)
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
                this.getQuestions(0);
                this.selectedQuestion = null;
            }
        );
    }

    onDeleteQuestion() {
        if (confirm("Вы действительно хотите удалить вопрос?")) {
            this.httpService.deleteQuestion(this.selectedQuestion).subscribe(
                response => {
                    this.getQuestions(0);
                    this.selectedQuestion = null;
                }
            );
        }
    }

    onResetQuestion() {
        this.selectedQuestion = null;
    }

    onActionCreateQuestion() {
        this.selectedQuestion = new Question();
        this.selectedQuestion.themeDto = new Theme();
        this.selectedQuestion.answerOptions = [new AnswerOption()];

    }

    deleteAnswerOption(answerOption: AnswerOption) {
        this.selectedQuestion.answerOptions.forEach(function (obj) {
            if (obj === answerOption) {
                obj.deleted = true;
            }
        });
    }

    addAnswerOption() {
        this.selectedQuestion.answerOptions.push(new AnswerOption());
    }


    pageChanged(event: any): void {
        this.getQuestions(event - 1);
    };
}