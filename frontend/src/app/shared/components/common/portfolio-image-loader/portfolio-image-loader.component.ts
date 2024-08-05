import { Component, Input, HostListener } from '@angular/core';
import { NgClass, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-portfolio-image-loader',
  standalone: true,
  imports: [NgStyle, NgClass, LoaderComponent, NgIf, NgOptimizedImage],
  template: `
    <ng-container *ngIf="src">
      <div
        class="d-flex justify-content-center align-items-center"
        style="position: relative;"
      >
        <!-- Loader -->
        <app-loader *ngIf="!isLoaded" class="position-absolute"></app-loader>

        <!-- Image -->
        <img
          [alt]="alt"
          [ngSrc]="src"
          [width]="width"
          [height]="height"
          decoding="async"
          class="img-fluid w-100 h-100"
          (load)="onLoad()"
          (error)="onError()"
          (click)="showPopover($event)"
          style="cursor: pointer;"
        />
      </div>
    </ng-container>

    <!-- Popover -->
    <div
      class="popover-container"
      *ngIf="isPopoverVisible"
      (click)="hidePopover()"
    >
      <div class="popover-content">
        <img
          [src]="src"
          [alt]="alt"
          class="popover-image"
          (click)="$event.stopPropagation()"
        />
      </div>
    </div>
  `,
  styles: [`
    .loading {
      position: relative;
    }
    .position-absolute {
      position: absolute;
    }
    .popover-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .popover-content {
      position: relative;
      width: 50vw; /* Set image to be 50% of the viewport width */
      max-width: 90vw;  /* Ensures responsiveness on very small screens */
      max-height: 90vh; /* Ensures responsiveness on very small screens */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popover-image {
      width: 50%;
      height: auto; /* Maintains aspect ratio */
      max-height: 90vh; /* Ensures the image does not exceed viewport height */
    }
    @media(max-width: 425px) {
      .popover-image {
      width: 100%;
    }
    .popover-content {
      width: 100vw;
    }
    }
  `]
})
export class PortfolioImageLoaderComponent {
  @Input() src!: string;
  @Input() alt: string = '';
  @Input() width: number = 414;
  @Input() height: number = 414;

  isLoaded: boolean = false;
  isPopoverVisible: boolean = false;

  onLoad(): void {
    this.isLoaded = true;
    console.log(`Image loaded: ${this.src}`);
  }

  onError(): void {
    this.isLoaded = true;
    console.error(`Failed to load image: ${this.src}`);
  }

  showPopover(event: MouseEvent): void {
    this.isPopoverVisible = true;
  }

  hidePopover(): void {
    this.isPopoverVisible = false;
  }

  // Optionally close the popover when the 'Escape' key is pressed
  @HostListener('document:keydown.escape', ['$event'])
  onEscKeyPress(event: KeyboardEvent): void {
    this.hidePopover();
  }
}
