import { Component, inject, Input } from '@angular/core';
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
  @Input() question?: Question;

  route: ActivatedRoute = inject(ActivatedRoute);
  questionService = inject(QuestionService);
  hideAnswer? : boolean = true;
/*
  constructor() {
    // this.question = this.questionService.getQuestionById(this.route.snapshot.params['id']);;
    console.log("Question Detail Component: " + this.id);
  }
*/

  ngOnChanges(question: Question)
  {
    this.hideAnswer = true;
  }

  public showAnswer() {
    this.hideAnswer = false;
  }
}
