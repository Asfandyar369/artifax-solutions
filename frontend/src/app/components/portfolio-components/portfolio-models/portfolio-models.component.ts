import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-portfolio-models',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-models.component.html',
  styleUrl: './portfolio-models.component.css',
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
export class PortfolioModelsComponent implements OnInit {
  portfolioModel: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Models';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolioModels();
  }

  private getPortfolioModels(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-model`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolioModel = res;
          this.filteredCardList = res.showCaseCardList;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Models') {
      debugger
      this.filteredCardList = this.portfolioModel?.showCaseCardList;
    } else {
      this.filteredCardList = this.portfolioModel?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.description === option
        );
    }
  }
}
