import { Component, OnInit } from '@angular/core';
import { PortfolioShowcase } from '../../../../interface/PortfolioShowcase';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PortfolioShowcaseCard } from '../../../../interface/PortfolioShowcase';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-portfolio-emotes',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './portfolio-emotes.component.html',
  styleUrl: './portfolio-emotes.component.css',
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
export class PortfolioEmotesComponent implements OnInit {
  portfolioEmote: PortfolioShowcase | undefined | null;
  filteredCardList: PortfolioShowcaseCard[] | undefined | null;
  activeFilter: string = 'All Emotes';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolioEmote();
  }

  private getPortfolioEmote(): void {
    this.http
      .get<PortfolioShowcase>(`${environment.apiUrl}/portfolio-emote`)
      .subscribe(
        (res: PortfolioShowcase) => {
          this.portfolioEmote = res;
          this.filteredCardList = res.showCaseCardList;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  filterCards(option: string): void {
    this.activeFilter = option;
    if (option === 'All Emotes') {
      this.filteredCardList = this.portfolioEmote?.showCaseCardList;
    } else {
      debugger
      this.filteredCardList = this.portfolioEmote?.showCaseCardList
        ?.filter(
          (card: PortfolioShowcaseCard) => card.title === option
        );
    }
  }
}
