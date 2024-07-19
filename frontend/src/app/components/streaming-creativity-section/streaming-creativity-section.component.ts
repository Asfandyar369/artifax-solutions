import { Component, OnInit } from '@angular/core';
import { StreamingCreativitySection } from '../../interface/StreamingCreativitySection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-streaming-creativity-section',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './streaming-creativity-section.component.html',
  styleUrl: './streaming-creativity-section.component.css'
})
export class StreamingCreativitySectionComponent implements OnInit {
  streamingCreativitySection: StreamingCreativitySection | undefined | null;
  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit(): void {
    this.getStreamingCreativitySection();
  }
  private getStreamingCreativitySection(): void {
    this.http
      .get<StreamingCreativitySection>(`${environment.apiUrl}/streaming-creativity-section`)
      .subscribe(
        (res: StreamingCreativitySection) => {

          this.streamingCreativitySection = res;
        }, (error) => {
          console.error(error);
        });
  }
}
