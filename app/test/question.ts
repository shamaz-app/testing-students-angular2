import {Theme} from "./theme";
import {AnswerOption} from "./question/answer-option";
/**
 * Created by Анастасия on 10.10.2016.
 */

export class Question {
     id: string;
    question: string;
    themeDto: Theme;
    answerOptions: AnswerOption[];


    constructor(id: string, question: string, themeDto: Theme, answerOptions: AnswerOption[]) {
        this.id = id;
        this.question = question;
        this.themeDto = themeDto;
        this.answerOptions = answerOptions;
    }
}