import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from './../../components/question/question.component';
import { QuestionService } from './../../services/question/question.service';
import { Question } from './../../interfaces/question';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})

export class QuestionsComponent {
  questionList: Question[] = [];

  questionService: QuestionService = inject(QuestionService);

  constructor() {
    this.questionList = this.questionService.getAllQuestions();
    console.log(this.questionList);
  }
}
