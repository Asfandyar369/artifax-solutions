import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../components/common-components/header-banner/header-banner.component";
import { ContactFormComponent } from "../../components/contact-components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderBannerComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
