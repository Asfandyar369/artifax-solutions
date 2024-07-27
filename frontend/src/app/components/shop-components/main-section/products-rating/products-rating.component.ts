import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductRating } from '../../../../../interface/ProductRating';

@Component({
  selector: 'app-products-rating',
  standalone: true,
  imports: [CurrencyPipe, NgFor, NgClass, NgIf],
  templateUrl: './products-rating.component.html',
  styleUrls: ['./products-rating.component.css']
})
export class ProductsRatingComponent implements OnInit {
  products: ProductRating[] = [];
  stars: number[] = [1, 2, 3, 4, 5]; // Array representing 5 stars

  constructor() { }

  ngOnInit(): void {
    this.getProductRatings();
    this.loadRatingsFromLocalStorage(); // Load ratings on initialization
  }

  private getProductRatings(): void {
    this.products = [
      { name: '3D Scene', image: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/12/3d-scene-shop-thumb.gif', rating: 3, priceFrom: 100, priceTo: 200 },
      { name: 'Vtuber Design 3D', image: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/vtuber-design-3d-shop-thumb.gif', rating: 1, priceFrom: 450, priceTo: 1000 },
      { name: 'Gaming Room', image: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/gaming-room-shop-thumb.gif', rating: 3, priceFrom: 700, priceTo: 1200 },
      { name: 'Emotes', image: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/emotes-shop-thumb.gif', rating: 0, priceFrom: 60, priceTo: 300 },
      { name: 'PFP', image: 'https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/11/pfp-shop-thumb.gif', rating: 2, priceFrom: 70, priceTo: 100 }
    ];
  }

  // Function to set the rating
  setRating(product: ProductRating, rating: number): void {
    product.rating = rating;
    this.saveRatingToLocalStorage(product.name!, rating); // Save rating to local storage
  }

  // Save rating to local storage
  private saveRatingToLocalStorage(productName: string, rating: number): void {
    localStorage.setItem(`rating_${productName}`, rating.toString());
  }

  // Load ratings from local storage
  private loadRatingsFromLocalStorage(): void {
    this.products.forEach(product => {
      const storedRating = localStorage.getItem(`rating_${product.name}`);
      if (storedRating) {
        product.rating = parseInt(storedRating, 10);
      }
    });
  }
}
