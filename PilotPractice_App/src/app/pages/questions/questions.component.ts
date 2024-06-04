import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { QuestionComponent } from './../../components/question/question.component';
import { QuestionService } from './../../services/question/question.service';
import { Question } from './../../interfaces/question';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, QuestionComponent, RouterLink, RouterOutlet],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})

export class QuestionsComponent {
  questionList: Question[] = [];
  selectedQuestion?: Question;

  questionService: QuestionService = inject(QuestionService);

  constructor() {
    this.questionList = this.questionService.getAllQuestions();
    console.log(this.questionList);
  }

  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }
}
