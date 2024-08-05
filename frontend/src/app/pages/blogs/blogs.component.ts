import { Component } from '@angular/core';
import { HeaderBannerComponent } from "../../shared/components/common/header-banner/header-banner.component";
import { TimlineComponent } from "../../shared/components/blogs-components/timline/timline.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HeaderBannerComponent, TimlineComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

}
