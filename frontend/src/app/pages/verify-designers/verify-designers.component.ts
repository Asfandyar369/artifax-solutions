import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../components/common-components/header-banner/header-banner.component";
import { VerifyComponent } from "../../components/verify-designer-components/verify/verify.component";

@Component({
  selector: 'app-verify-designers',
  standalone: true,
  imports: [HeaderBannerComponent, VerifyComponent],
  templateUrl: './verify-designers.component.html',
  styleUrl: './verify-designers.component.css'
})
export class VerifyDesignersComponent {

}
