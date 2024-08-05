import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-by-price',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-by-price.component.html',
  styleUrl: './filter-by-price.component.css'
})
export class FilterByPriceComponent {
  price: number = 0; // Initialize the price model
  priceRange = { min: 0, max: 1200 }; // Define the range values

  // Method to update the slider style based on the value
  getSliderBackground(): string {
    const percentage = (this.price / this.priceRange.max) * 100;
    return `linear-gradient(to right, #32ed22 ${percentage}%, #ffffff ${percentage}%)`;
  }

  updateSliderStyle(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.price = parseInt(input.value, 10);
    this.updatePriceRange();
  }

  private updatePriceRange(): void {
    // Update the displayed price range based on the slider's current value
    this.priceRange.min = this.price;
    this.priceRange.max = 1200; // You can adjust this logic as needed
  }
}
