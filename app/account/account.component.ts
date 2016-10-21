/**
 * Created by Анастасия on 06.09.2016.
 */

import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

import { Account }  from './account'

import './rxjs-operators';

@Component({
    selector: 'accounts',
    templateUrl: 'app/account/account.component.html',
    providers: [AccountService]
})

export class AccountComponent implements OnInit{
    constructor(private accountService: AccountService) { }

    mode = 'Observable';
    errorMessage: string;

    accounts: Account[];
    account: Account;

    ngOnInit() {
        this.getAccounts();
    }

    getAccounts(): void {
        this.accountService.getAccounts()
            .subscribe(
                response => {
                    this.accounts=response;
                    console.log(this.accounts);
                },
                error =>  this.errorMessage = <any>error);
    }

    addAccount () {
        if (!this.account.login || !this.account.password) { return }
        this.accountService.addAccount(this.account);
    }
}
