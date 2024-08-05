import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../shared/components/common/header-banner/header-banner.component";
import { ContactFormComponent } from "../../shared/components/contact-components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderBannerComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
