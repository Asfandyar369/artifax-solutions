import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-your-order',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './your-order.component.html',
  styleUrl: './your-order.component.css'
})
export class YourOrderComponent {
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
