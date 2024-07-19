import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../interface/Footer';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule,NgFor],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent implements OnInit {
  input: string | undefined | null;
  footerData: Footer | undefined | null;

  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit(): void {
    this.getFooter();
  }

  private getFooter(): void {
    this.http
      .get<Footer>(`${environment.apiUrl}/footer`)
      .subscribe(
        (res: Footer) => {
          this.footerData = res;

          console.log(this.footerData);
        }, (error) => {
          console.error(error);
        });
  }
}
