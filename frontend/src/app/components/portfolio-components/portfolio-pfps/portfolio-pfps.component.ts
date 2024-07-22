import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';


@Component({
  selector: 'app-portfolio-pfps',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-pfps.component.html',
  styleUrls: ['./portfolio-pfps.component.css'],
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
export class PortfolioPFPsComponent implements OnInit {
  PortfolioPFPs: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All PFPs';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolioShowcase();
  }

  private getPortfolioShowcase(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-pfps`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.PortfolioPFPs = res;
          this.filteredCardList = res.showCaseCardList;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All PFPs') {
      this.filteredCardList = this.PortfolioPFPs?.showCaseCardList;
    } else {
      this.filteredCardList = this.PortfolioPFPs?.showCaseCardList?.filter(card => card.description === option);
    }
  }
}
