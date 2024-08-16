import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NgClass, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-portfolio-image-loader',
  standalone: true,
  imports: [NgStyle, NgClass, LoaderComponent, NgIf, NgOptimizedImage],
  template: `
    <ng-container *ngIf="src">
      <div
        class="image-container d-flex justify-content-center align-items-center"
        style="position: relative;"
      >
        <!-- Loader -->
        <app-loader *ngIf="!isLoaded" class="position-absolute"></app-loader>

        <!-- Image -->

        <!-- Conditionally apply ngSrc or src -->
        <ng-container *ngIf="!isBlobUrl(src); else useSrc">
        <img
          [alt]="alt"
          [ngSrc]="src"
          [width]="width"
          [height]="height"
          decoding="async"
          class="img-fluid w-100 h-100 zoomable-image"
          (load)="onLoad()"
          (error)="onError()"
          (click)="showPopover($event)"
          style="cursor: pointer;"
        />
        </ng-container>
        <!-- Fallback to using src attribute for blob URLs -->
        <ng-template #useSrc>
          <img
            [alt]="alt"
            [src]="src"
            [width]="width"
            [height]="height"
            decoding="async"
            class="img-fluid w-100 h-100 zoomable-image"
            (load)="onLoad()"
            (error)="onError()"
            (click)="showPopover($event)"
            style="cursor: pointer;"
          />
        </ng-template>
        <!-- Delete Icon -->
        <div class="icon-container">
          <button class="bg-transparent border-0 text-danger">
            <i class="bi bi-trash-fill fs-4" (click)="onDelete($event)"></i>
          </button>
        </div>
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
    .position-absolute {
      position: absolute;
    }
    .image-container {
      position: relative;
      overflow: hidden;
    }
    .zoomable-image {
      transition: transform 0.3s ease;
    }
    .image-container:hover .zoomable-image {
      transform: scale(1.05);
    }
    .icon-container {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      gap: 10px;
      padding: 5px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .image-container:hover .icon-container {
      opacity: 1;
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
      width: 50vw;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popover-image {
      width: 50%;
      height: auto;
      max-height: 90vh;
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
  @Input() width: number | undefined;
  @Input() height: number | undefined;

  @Output() delete = new EventEmitter<void>();

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

  onDelete(event: MouseEvent): void {
    event.stopPropagation();
    this.delete.emit(); // Emit the delete event
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeyPress(event: KeyboardEvent): void {
    this.hidePopover();
  }

  isBlobUrl(url: string): boolean {
    return url.startsWith('blob:');
  }
}
