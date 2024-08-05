import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../../shared/components/common/header-banner/header-banner.component";
import { LoginComponent } from "../../../shared/components/shop-components/my-account/login/login.component";
import { RegisterComponent } from "../../../shared/components/shop-components/my-account/register/register.component";

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [HeaderBannerComponent, LoginComponent, RegisterComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

}
