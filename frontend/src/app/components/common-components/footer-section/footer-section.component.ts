import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../../interface/Footer';
import { environment } from '../../../../environments/environment';
import { BuildStreamSectionComponent } from "../../home-components/build-stream-section/build-stream-section.component";

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule, NgFor, NgClass, BuildStreamSectionComponent],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent implements OnInit {
  input: string | undefined | null;
  footerData: Footer | undefined | null;

  constructor(
  ) { }
  ngOnInit(): void {
    this.getFooter();
  }

  private getFooter(): void {
    this.footerData = {
      "id": 1,
      "logoUrl": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2023/10/Logos-05-copy.png",
      "logoAltText": "Streamer Station",
      "aboutText": "Streamer station was Founded in 2020 by a team of professional designers, which specializes in providing top-tier designing services tailored for streamers.",
      "copyrightText": "Copyright © 2024 All rights reserved by Digital Amplify.",
      "copyrightLink": "https://digitalamplify.com/",
      "ourPaymentMethods": "Our Payment Methods",
      "paymentMethodsImg": "https://cdn-gepmfkb.nitrocdn.com/WYEremhYGNlHzmKefSTYSkktLYZvoCNY/assets/images/optimized/rev-421e137/streamerstation.com/wp-content/uploads/2024/02/Payment-Methods-White-BG.png",
      "buttonText": null,
      "buttonLink": null,
      "headingList": [
        {
          "heading": "Company",
          "menuList": [
            {
              "id": 1,
              "menuName": "About",
              "linkUrl": "https://streamerstation.com/about/"
            },
            {
              "id": 2,
              "menuName": "Blogs",
              "linkUrl": "https://streamerstation.com/blogs/"
            },
            {
              "id": 3,
              "menuName": "Our Portfolio",
              "linkUrl": "https://streamerstation.com/our-portfolio/"
            },
            {
              "id": 4,
              "menuName": "Affiliated Designers",
              "linkUrl": "https://streamerstation.com/affiliated-designers/"
            },
            {
              "id": 5,
              "menuName": "Contact",
              "linkUrl": "https://streamerstation.com/contact/"
            },
            {
              "id": 6,
              "menuName": "Privacy Policy",
              "linkUrl": "https://streamerstation.com/privacy-policy/"
            }
          ],
          "menuIconList": [],
          "menuButtonList": []
        },
        {
          "heading": "Services",
          "menuList": [
            {
              "id": 7,
              "menuName": "Shop",
              "linkUrl": "https://streamerstation.com/about/"
            },
            {
              "id": 8,
              "menuName": "Streaming Graphics Design",
              "linkUrl": "https://streamerstation.com/blogs/"
            },
            {
              "id": 9,
              "menuName": "3D Scenes & Gaming Room",
              "linkUrl": "https://streamerstation.com/our-portfolio/"
            },
            {
              "id": 10,
              "menuName": "VTuber Model",
              "linkUrl": "https://streamerstation.com/affiliated-designers/"
            }
          ],
          "menuIconList": [],
          "menuButtonList": []
        },
        {
          "heading": "Contact",
          "menuList": [
            {
              "id": 11,
              "menuName": "abc@gmail.com",
              "linkUrl": "mailto:abc@gmail.com"
            },
            {
              "id": 12,
              "menuName": "support@streamerstation.com",
              "linkUrl": "mailto:support@streamerstation.com"
            }
          ],
          "menuIconList": [
            {
              "id": 1,
              "icon": "Facebook",
              "iconClass": "bi-facebook",
              "iconUrl": "/"
            },
            {
              "id": 2,
              "icon": "LinkedIn",
              "iconClass": "bi-linkedin",
              "iconUrl": "/"
            },
            {
              "id": 3,
              "icon": "Twitter",
              "iconClass": "bi-twitter",
              "iconUrl": "/"
            },
            {
              "id": 4,
              "icon": "Instagram",
              "iconClass": "bi-instagram",
              "iconUrl": "/"
            },
            {
              "id": 5,
              "icon": "Discord",
              "iconClass": "bi-discord",
              "iconUrl": "/"
            },
            {
              "id": 6,
              "icon": "Behance",
              "iconClass": "bi-behance",
              "iconUrl": "/"
            },
            {
              "id": 7,
              "icon": "Twitch",
              "iconClass": "bi-twitch",
              "iconUrl": "/"
            }
          ],
          "menuButtonList": [
            {
              "id": 1,
              "buttonText": "Sign up now and save",
              "buttonLink": "/sign-up"
            }
          ]
        }
      ]
    };
  }
}

