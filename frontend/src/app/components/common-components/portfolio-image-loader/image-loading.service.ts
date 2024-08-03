import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageLoadingService {
  private imagesToLoad: number = 0;
  private loadedImages: any[] = [];

  /**
   * Initialize the loading process with the expected number of images.
   * @param count The total number of images expected to load.
   */
  initializeLoading(count: number) {
    this.imagesToLoad = count;
    this.loadedImages = [];
  }

  /**
   * Add loaded image details and log the table if all images are loaded.
   * @param imageDetails Details of the loaded image.
   */
  addLoadedImage(imageDetails: { src: string; alt: string; width: number; height: number }) {
    this.loadedImages.push(imageDetails);

    if (this.loadedImages.length === this.imagesToLoad) {
      // Log all loaded image details to the console
      console.table(this.loadedImages);
    }
  }
}
