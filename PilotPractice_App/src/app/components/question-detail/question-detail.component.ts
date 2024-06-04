import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { QuestionService } from './../../services/question/question.service';
import { Question } from './../../interfaces/question';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.css'
})

export class QuestionDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  questionService = inject(QuestionService);
  question: Question | undefined;

  constructor() {
    const questionId = this.route.snapshot.params['id'];
    this.question = this.questionService.getQuestionById(questionId);
  }

}
