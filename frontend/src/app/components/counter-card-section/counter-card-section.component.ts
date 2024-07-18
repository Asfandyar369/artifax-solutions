import { Component, OnInit } from '@angular/core';
import { BackgroundImage } from '../../interface/counterCardsSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-counter-card-section',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './counter-card-section.component.html',
  styleUrl: './counter-card-section.component.css'
})
export class CounterCardSectionComponent implements OnInit {
  counterCardsSection: BackgroundImage | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getCounterCardsSection();
  }

  private getCounterCardsSection(): void {
    this.http.get<BackgroundImage>(`${environment.apiUrl}/counter-card-section`).subscribe(
      (data: BackgroundImage) => {
        this.counterCardsSection = data;
      },
      (error) => {
        console.error('Error fetching counter cards section:', error);
      }
    );
  }
}
