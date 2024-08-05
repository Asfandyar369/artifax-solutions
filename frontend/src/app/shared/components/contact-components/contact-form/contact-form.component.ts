import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  passwordVisible: boolean = false;
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
