import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Carousel } from '../../../../interface/BannerSection';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [NgFor, NgClass, RouterModule, NgIf],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent implements OnInit {
  carousel: Carousel | undefined | null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCarousels();
  }

  private getCarousels(): void {
    this.http.get<Carousel>(`${environment.apiUrl}/carousel`).subscribe(
      (data: Carousel) => {
        this.carousel = data;
      }, (error) => {
        console.error('Error fetching carousels:', error);
      });
  }
}
