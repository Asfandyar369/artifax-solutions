import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../shared/components/common/header-banner/header-banner.component";
import { VerifyComponent } from "../../shared/components/verify-designer-components/verify/verify.component";

@Component({
  selector: 'app-verify-designers',
  standalone: true,
  imports: [HeaderBannerComponent, VerifyComponent],
  templateUrl: './verify-designers.component.html',
  styleUrl: './verify-designers.component.css'
})
export class VerifyDesignersComponent {

}
