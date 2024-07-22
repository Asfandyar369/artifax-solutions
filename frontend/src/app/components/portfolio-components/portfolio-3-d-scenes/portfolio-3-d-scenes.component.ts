import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-portfolio-3-d-scenes',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-3-d-scenes.component.html',
  styleUrl: './portfolio-3-d-scenes.component.css',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class Portfolio3DScenesComponent implements OnInit {
  portfolio3DScene: PortfolioShowcase | undefined | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolio3DScene();
  }

  private getPortfolio3DScene(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-3d-scene`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolio3DScene = res;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
