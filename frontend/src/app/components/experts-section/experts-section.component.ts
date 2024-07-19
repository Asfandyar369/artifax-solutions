import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpertSection } from '../../interface/ExpertSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-experts-section',
  standalone: true,
  imports: [NgbModule, NgIf, NgFor],
  templateUrl: './experts-section.component.html',
  styleUrl: './experts-section.component.css'
})
export class ExpertsSectionComponent implements OnInit {
  expertsSection: ExpertSection | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getExpertSection();
  }

  getExpertSection(): void {
    this.http.get<ExpertSection>(`${environment.apiUrl}/expert-section`).subscribe(
      (res: ExpertSection) => {
        this.expertsSection = res;
      }, (error) => {
        console.error(error);
      });
  }
}
