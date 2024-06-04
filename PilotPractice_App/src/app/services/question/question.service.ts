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
    {
      id: "1a2b3d",
      title: "Half and half",
      questionText: "If it takes a half of a chicken a half of a day to lay a half of an egg, how long will it take a pirate with a peg-leg to kick all the seeds out of a dill pickle?",
      answerA: "Jannet Jackson at the Super Bowl",
      answerB: "Three Doors Down",
      answerC: "90 degrees",
      answerD: "Purple, because aliens don't wear hats.",
      correctAnswer: "A",
    },
  ]

  getAllQuestions(): Question[] {
    return this.questionList;
  }

  getQuestionById(id: string): Question | undefined {
    return this.questionList.find(question => question.id === id);
  }
}
