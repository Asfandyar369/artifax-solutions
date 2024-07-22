import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-portfolio-streampack',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-streampack.component.html',
  styleUrl: './portfolio-streampack.component.css',
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
export class PortfolioStreampackComponent implements OnInit {
  portfolioStreamPack: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Stream Pack';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolioStreamPack();
  }

  private getPortfolioStreamPack(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-stream-pack`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolioStreamPack = res;
          this.filteredCardList = res.showCaseCardList;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Stream Pack') {
      debugger
      this.filteredCardList = this.portfolioStreamPack?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioStreamPack?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }

}
