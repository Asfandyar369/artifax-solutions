import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { Subscription } from 'rxjs';
import { ImageLoaderService } from './image-loader.service';

@Component({
  selector: 'app-portfolio-image-loader',
  standalone: true,
  imports: [NgStyle, NgClass, LoaderComponent, NgIf],
  template: `
    <ng-container *ngIf="src">
      <div
        class="d-flex justify-content-center align-items-center"
        [ngClass]="{'loading': !isLoaded}"
        [style.max-width.px]="width"
        [style.height.px]="height"
        style="position: relative;"
      >
        <!-- Loader -->
        <app-loader *ngIf="!isLoaded" style="position: absolute;"></app-loader>

        <!-- Image -->
        <img
          [src]="src"
          [alt]="alt"
          class="img-fluid"
          [width]="width"
          [height]="height"
          (load)="onLoad()"
          (error)="onError()"
          [style.display]="isLoaded ? 'block' : 'none'"
        />
      </div>
    </ng-container>
  `,
  styles: [`
    .loading {
      position: relative;
    }
  `]
})
export class PortfolioImageLoaderComponent implements OnInit, OnDestroy {
  @Input() src!: string;
  @Input() alt: string = '';
  @Input() width: number = 414;
  @Input() height: number = 414;

  isLoaded: boolean = false;
  private loadStatus$: Subscription | undefined;

  constructor(private imageLoaderService: ImageLoaderService) { }

  ngOnInit(): void {
    // Subscribe to the image load status observable
    this.loadStatus$ = this.imageLoaderService.getImageLoadStatus(this.src).subscribe(
      status => this.isLoaded = status
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.loadStatus$?.unsubscribe();
  }

  onLoad(): void {
    console.log(`Image loaded: ${this.src}`);
    this.imageLoaderService.setImageLoadStatus(this.src, true);
  }

  onError(): void {
    console.error(`Failed to load image: ${this.src}`);
    this.imageLoaderService.setImageLoadStatus(this.src, true);
  }
}
