import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-totals',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-totals.component.html',
  styleUrl: './cart-totals.component.css'
})
export class CartTotalsComponent {
  @Input() subtotal: number = 0;
  @Input() total: number = 0;

  proceedToCheckout() {
    // Proceed to checkout logic
    alert('Proceeding to checkout!');
  }

  payWithPaypal() {
    // PayPal payment logic
    alert('Paying with PayPal!');
  }

  payWithGooglePay() {
    // Google Pay payment logic
    alert('Paying with Google Pay!');
  }
}
