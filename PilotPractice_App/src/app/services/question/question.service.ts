import { Injectable } from '@angular/core';
import { Question } from './../../interfaces/question';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  questionList: Question[] = [
    {
      id: "1a2b3c",
      title: "PilotPractice_App",
      questionText: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
      answerA: "One would wood if wood could.",
      answerB: "Banana",
      answerC: "Orange",
      answerD: "Orange you glad I didn't say banana?",
      correctAnswer: "A",
    },
  ]

  getAllQuestions(): Question[] {
    return this.questionList;
  }
}
