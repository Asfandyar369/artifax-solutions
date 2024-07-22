import { Component } from '@angular/core';
import { OurServicesHeaderBannerComponent } from "../../components/our-services-components/our-services-header-banner/our-services-header-banner.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [OurServicesHeaderBannerComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

}
