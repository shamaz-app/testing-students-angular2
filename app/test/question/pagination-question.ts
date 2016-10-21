import {Question} from "../question";
/**
 * Created by Анастасия on 10.10.2016.
 */

export abstract class PaginationQuestion {
    totalPages: number;
    totalElements: number;
    first: boolean;
    last: boolean;
    size: number;
    number: number;
    content: Question[];

    constructor(totalPages: number, totalElements: number, first: boolean, last: boolean, size: number, number: number, content: Question[]) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.first = first;
        this.last = last;
        this.size = size;
        this.number = number;
        this.content = content;
    }
}