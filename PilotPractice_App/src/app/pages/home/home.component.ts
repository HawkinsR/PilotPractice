import { Component } from '@angular/core';
import { QuestionComponent } from './../../components/question/question.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
