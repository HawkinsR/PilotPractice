import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path:'quiz',
    component: QuizComponent,
    title: 'Quiz',
  },
  {
    path:'question',
    component: QuestionsComponent,
    title: 'Question'
  },
  {
    path:'question/:id',
    component: QuestionDetailComponent,
    title: 'Question'
  },
];
