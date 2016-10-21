"use strict";
/**
 * Created by Анастасия on 10.10.2016.
 */
var PaginationQuestion = (function () {
    function PaginationQuestion(totalPages, totalElements, first, last, size, number, content) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.first = first;
        this.last = last;
        this.size = size;
        this.number = number;
        this.content = content;
    }
    return PaginationQuestion;
}());
exports.PaginationQuestion = PaginationQuestion;
//# sourceMappingURL=pagination-question.js.map