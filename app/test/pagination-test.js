"use strict";
var PaginationTest = (function () {
    function PaginationTest(totalPages, totalElements, first, last, size, number, content) {
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.first = first;
        this.last = last;
        this.size = size;
        this.number = number;
        this.content = content;
    }
    return PaginationTest;
}());
exports.PaginationTest = PaginationTest;
//# sourceMappingURL=pagination-test.js.map