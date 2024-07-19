import { Component, OnInit } from '@angular/core';
import { SocialSection } from '../../interface/SocialSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-social-section',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, NgbTooltip],
  templateUrl: './social-section.component.html',
  styleUrl: './social-section.component.css'
})
export class SocialSectionComponent implements OnInit {
  socialSection: SocialSection | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getSocialSection();
  }

  private getSocialSection(): void {
    this.http
      .get<SocialSection>(`${environment.apiUrl}/social-section`)
      .subscribe(
        (res: SocialSection) => {
          this.socialSection = res;
        }, (error) => {
          console.error(error);
        });
  }
}
