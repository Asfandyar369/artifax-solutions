import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  passwordVisible: boolean = false;
  showPassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
