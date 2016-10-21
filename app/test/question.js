"use strict";
/**
 * Created by Анастасия on 10.10.2016.
 */
var Question = (function () {
    function Question(id, question, themeDto, answerOptions) {
        this.id = id;
        this.question = question;
        this.themeDto = themeDto;
        this.answerOptions = answerOptions;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map