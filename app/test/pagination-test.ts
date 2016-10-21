/**
 * Created by Анастасия on 27.09.2016.
 */
import {Test} from "./test";

export class PaginationTest {
    totalPages: number;
    totalElements: number;
    first: boolean;
    last: boolean;
    size: number;
    number: number;

    content: Test[];


    constructor(totalPages: number, totalElements: number, first: boolean, last: boolean, size: number, number: number, content: Test[]) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.first = first;
        this.last = last;
        this.size = size;
        this.number = number;
        this.content = content;
    }
}