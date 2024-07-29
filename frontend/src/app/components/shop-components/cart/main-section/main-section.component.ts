import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartTotalsComponent } from "../cart-totals/cart-totals.component";

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, CurrencyPipe, CartTotalsComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  isCartEmpty: boolean = false; // Toggle this to switch between empty and populated states
  couponCode: string = '';
  cartItems: CartItem[] = [
    {
      image: 'https://streamerstation.com/wp-content/uploads/2023/11/gaming-room-shop-thumb.gif',
      name: 'Gaming Room - Animated',
      price: 1200.00,
      quantity: 1
    },
  ];

  returnToShop() {
    alert('Returning to shop!');
    // Implement return to shop logic here
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.checkIfCartIsEmpty();
  }

  updateCart() {
    // Logic to update the cart
    console.log('Cart updated');
  }

  applyCoupon() {
    alert('Applying coupon: ' + this.couponCode);
    // Implement coupon logic here
  }

  checkIfCartIsEmpty() {
    this.isCartEmpty = this.cartItems.length === 0;
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTotal(): number {
    // Add any additional fees or discounts here
    return this.getSubtotal();
  }
}
interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}
