/**
 * Created by Анастасия on 10.10.2016.
 */

export class AnswerOption {
    id: string;
    option: string;
    right: boolean;


    constructor(id: string, option: string, right: boolean) {
        this.id = id;
        this.option = option;
        this.right = right;
    }
}