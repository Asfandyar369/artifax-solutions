import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BackgroundImage, CounterCardsSection } from '../../../../models/CounterCardsSection';
import { DynamicSelection } from '../../../../models/DynamicSelection';

@Component({
  selector: 'app-counter-card-section',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './counter-card-section.component.html',
  styleUrl: './counter-card-section.component.css',
})
export class CounterCardSectionComponent implements OnInit, OnDestroy {
  counterCardsSection: BackgroundImage | undefined | null;
  @Input() checkComponent: DynamicSelection | undefined | null;

  counters: CounterCardsSection[] = [];
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.getCounterCardsSection();
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private getCounterCardsSection(): void {
    if (this.checkComponent?.home) {
      this.counterCardsSection = {
        id: 1,
        imageUrl: 'images/homepage-banner.jpg',
        altText: '800 × 450 px Car Image',
        counterCards: [
          { id: 1, countValue: 800, icon: 'bi bi-people', label: 'Satisfied Streamers', currentValue: 0 },
          { id: 2, countValue: 400, icon: 'bi bi-clock', label: 'Days Of Operation', currentValue: 0 },
          { id: 3, countValue: 1200, icon: 'bi bi-check2-circle', label: 'Complete Project', currentValue: 0 },
          { id: 4, countValue: 15, icon: 'bi bi-award', label: 'Achievements', currentValue: 0 }
        ]
      };
    } else if (this.checkComponent?.about) {
      this.counterCardsSection = {
        id: 1,
        imageUrl: 'images/Order-889-2-animated-poster-design.jpg',
        altText: '800 × 450 px Car Image',
        counterCards: [
          { id: 1, countValue: 800, icon: 'bi bi-people', label: 'Satisfied Streamers', currentValue: 0 },
          { id: 2, countValue: 400, icon: 'bi bi-clock', label: 'Days Of Operation', currentValue: 0 },
          { id: 3, countValue: 1200, icon: 'bi bi-check2-circle', label: 'Complete Project', currentValue: 0 },
          { id: 4, countValue: 15, icon: 'bi bi-award', label: 'Achievements', currentValue: 0 }
        ]
      };
    }

    this.counters = this.counterCardsSection?.counterCards?.map(counter => ({
      ...counter,
      currentValue: 0
    })) || [];
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounters();
          } else {
            this.resetCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (this.el.nativeElement) {
      this.observer.observe(this.el.nativeElement);
    }
  }

  private startCounters(): void {
    this.counters.forEach(counter => {
      const startTime = performance.now();
      const duration = 2000;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        counter.currentValue = Math.floor(progress * counter.countValue!);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          counter.currentValue = counter.countValue;
        }
      };

      requestAnimationFrame(animate);
    });
  }

  private resetCounters(): void {
    this.counters.forEach(counter => counter.currentValue = 0);
  }
}
