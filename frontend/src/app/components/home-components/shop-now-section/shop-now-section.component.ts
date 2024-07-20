import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ShopNowSection } from '../../../../interface/ShopNowSection';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-shop-now-section',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './shop-now-section.component.html',
  styleUrl: './shop-now-section.component.css'
})
export class ShopNowSectionComponent implements OnInit {
  shopNowSection: ShopNowSection | undefined | null;
  constructor(
    private http: HttpClient,
  ) { }
  ngOnInit(): void {
    this.getShopNowSection();
  }
  private getShopNowSection(): void {
    this.http
      .get<ShopNowSection>(`${environment.apiUrl}/shop-now-section`)
      .subscribe((res: ShopNowSection) => {
        this.shopNowSection = res;
      }, (error) => {
        console.error(error);
      });
  }
}
