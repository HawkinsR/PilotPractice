import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Question } from './../../interfaces/question';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})

export class QuestionComponent {
  @Input() question!: Question;
};

