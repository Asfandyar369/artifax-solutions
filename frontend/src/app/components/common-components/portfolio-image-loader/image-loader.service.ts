import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
  private imageLoadStatus: { [key: string]: BehaviorSubject<boolean> } = {};

  constructor() { }

  /**
   * Get the load status of an image as an observable.
   * Creates a new BehaviorSubject with initial status false if not present.
   */
  getImageLoadStatus(url: string): Observable<boolean> {
    if (!this.imageLoadStatus[url]) {
      this.imageLoadStatus[url] = new BehaviorSubject<boolean>(false);
    }
    return this.imageLoadStatus[url].asObservable();
  }

  /**
   * Set the load status of an image.
   * Creates or updates the BehaviorSubject with the given status.
   */
  setImageLoadStatus(url: string, status: boolean): void {
    if (!this.imageLoadStatus[url]) {
      this.imageLoadStatus[url] = new BehaviorSubject<boolean>(status);
    } else {
      this.imageLoadStatus[url].next(status);
    }
  }
}
