import { Component, OnInit } from '@angular/core';
import { BuildStreamSection } from '../../interface/BuildStreamSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-build-stream-section',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './build-stream-section.component.html',
  styleUrl: './build-stream-section.component.css'
})
export class BuildStreamSectionComponent implements OnInit {
  buildStreamSection: BuildStreamSection | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getBuildStreamSection();
  }

  private getBuildStreamSection(): void {
    this.http
      .get<BuildStreamSection>(`${environment.apiUrl}/build-stream-section`)
      .subscribe(
        (res: BuildStreamSection) => {
          this.buildStreamSection = res;
        }, (error) => {
          console.error(error);
        });
  }
}
