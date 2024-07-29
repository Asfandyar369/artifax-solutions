import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AcquireSection, AcquireSectionSlide } from '../../../../../interface/AcquireSection';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-google-ratings',
  standalone: true,
  imports: [NgIf, NgFor, NgbCarouselModule, NgClass],
  templateUrl: './google-ratings.component.html',
  styleUrl: './google-ratings.component.css'
})
export class GoogleRatingsComponent {
  data: AcquireSection | undefined | null;
  apiKey = "AIzaSyBK52TVbCDkiNivjQ3cC4GJBtvyfg9jzmA"
  placeId: string = 'ChIJ5aN5W-k5sz4Ryjh5Ibds5LI';
  placeDetails: PlaceDetails | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAcquireSection();
  }
  private getAcquireSection(): void {
    this.data = {
      "id": 1,
      "title": "Excellent",
      "subTitle": "bi bi-star-fill",
      "description": "Based on",
      "carouselSlides": [
        { "id": 1, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 1" },
        { "id": 2, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 2" },
        { "id": 3, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 3" },
        { "id": 4, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 4" },
        { "id": 5, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 5" },
        { "id": 6, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 6" },
        { "id": 7, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 7" },
        { "id": 8, "imageUrl": "https://via.placeholder.com/300", "altText": "Image 8" }
      ],
      "callToActions": null
    };
  }
  private fetchGoogleRatings(): void {
    const url = `${environment.apiUrl}/places/details`;
    this.http.get(`${url}?placeId=${this.placeId}`).subscribe(
      (response: any) => {
        if (response.result) {
          this.placeDetails = {
            name: response.result.name,
            rating: response.result.rating,
            user_ratings_total: response.result.user_ratings_total,
            reviews: response.result.reviews,
          };
        }
      },
      (error) => {
        console.error('Error fetching place details:', error);
      }
    );
  }

  public floor(value: number): number {
    return Math.floor(value);
  }

  public ceil(value: number): number {
    return Math.ceil(value);
  }

  public getStarClasses(i: number, rating: number): string {
    if (i < this.floor(rating)) {
      return 'bi-star-fill';
    }
    if (i >= this.floor(rating) && rating % 1 !== 0) {
      return 'bi-star-half';
    }
    return 'bi-star';
  }
  chunk(arr: AcquireSectionSlide[], chunkSize: number): AcquireSectionSlide[][] {
    const chunks: AcquireSectionSlide[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  trackByFn(index: number, item: AcquireSectionSlide): number {
    return item.id!;
  }

  trackBySlide(index: number, slideItems: AcquireSectionSlide[]): number {
    return index;
  }
}
interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
}
