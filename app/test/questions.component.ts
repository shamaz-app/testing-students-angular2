/**
 * Created by Анастасия on 10.10.2016.
 */

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {HttpService} from '../http.service';
import {Theme} from '../test/theme';

@Component({
    selector: 'themes-list',
    templateUrl: './app/test/themes.component.html'
})
export class QuestionsComponent implements OnInit {
    ngOnInit(): void {
    }


}