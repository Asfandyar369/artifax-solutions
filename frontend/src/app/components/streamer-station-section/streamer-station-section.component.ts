import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StreamerSection } from '../../interface/StreamerSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-streamer-station-section',
  standalone: true,
  imports: [NgbModule, NgIf, NgFor, RouterModule],
  templateUrl: './streamer-station-section.component.html',
  styleUrl: './streamer-station-section.component.css'
})
export class StreamerStationSectionComponent implements OnInit {
  streamerSection: StreamerSection | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getStreamerSection();
  }

  private getStreamerSection(): void {
    this.http.get<StreamerSection>
      (`${environment.apiUrl}/streamer-section`)
      .subscribe((res: StreamerSection) => {
        this.streamerSection = res;
      }, (error) => {
        console.error('Error fetching streamer section:', error);
      });
  }
}
