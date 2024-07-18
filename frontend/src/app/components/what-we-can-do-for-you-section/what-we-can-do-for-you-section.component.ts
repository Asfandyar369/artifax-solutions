import { Component, OnInit } from '@angular/core';
import { StreamerFeatureSection } from '../../interface/StreamerFeatureSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-what-we-can-do-for-you-section',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './what-we-can-do-for-you-section.component.html',
  styleUrl: './what-we-can-do-for-you-section.component.css'
})
export class WhatWeCanDoForYouSectionComponent implements OnInit {
  streamerFeature: StreamerFeatureSection | undefined | null;
  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.getStreamerFeature();
  }
  private getStreamerFeature(): void {
    this.http.get<StreamerFeatureSection>(`${environment.apiUrl}/streamer-feature`).subscribe(
      (data: StreamerFeatureSection) => {
        this.streamerFeature = data;
        console.log(this.streamerFeature);
      },
      (error) => {
        console.error('Error fetching streamer feature:', error);
      }
    );
  }
}
