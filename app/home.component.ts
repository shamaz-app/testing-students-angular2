/**
 * Created by Анастасия on 08.09.2016.
 */


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    template: `
    <h1>Welcome to Students Testing!</h1>
    <h2>Your role: {{role}}</h2>
    <router-outlet></router-outlet>
`
})
export class HomeComponent implements OnInit{
    public role: string;

    constructor(public router: Router) {  }

    ngOnInit() {
        this.role = localStorage.getItem('authorities');
        if (this.role == 'ROLE_ADMIN') {
            this.router.navigate(['test'])
        }
    }
}