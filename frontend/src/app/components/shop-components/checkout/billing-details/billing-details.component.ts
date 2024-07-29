import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { YourOrderComponent } from "../your-order/your-order.component";

@Component({
  selector: 'app-billing-details',
  standalone: true,
  imports: [NgFor, YourOrderComponent],
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.css'
})
export class BillingDetailsComponent implements OnInit {
  passwordVisible: boolean = false;
  countries: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCountries();
  }
  private getAllCountries(): void {
    this.http
      .get('https://restcountries.com/v3.1/all')
      .subscribe(
        (data: any) => {
          this.countries = data.sort((a: { name: { common: string; }; }, b: { name: { common: any; }; }) =>
            a.name.common.localeCompare(b.name.common)
          );
        });
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
