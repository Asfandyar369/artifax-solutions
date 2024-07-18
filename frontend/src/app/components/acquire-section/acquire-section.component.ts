import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcquireSection } from '../../interface/AcquireSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acquire-section',
  standalone: true,
  imports: [NgbModule, NgFor, RouterModule, NgIf],
  templateUrl: './acquire-section.component.html',
  styleUrl: './acquire-section.component.css'
})
export class AcquireSectionComponent implements OnInit {
  acquireSection: AcquireSection | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getAcquireSection();
  }
  private getAcquireSection(): void {
    this.http.get<AcquireSection>(`${environment.apiUrl}/acquire-section`).subscribe(
      (data: AcquireSection) => {
        this.acquireSection = data;
        console.log(this.acquireSection);
      },
      (error) => {
        console.error('Error fetching acquire section:', error);
      }
    );
  }
}
