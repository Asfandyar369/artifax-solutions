import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from './shared/components/common/header/header.component';
import { FooterSectionComponent } from './shared/components/common/footer-section/footer-section.component';
import { MetaService } from './shared/services/meta-service/meta.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    FooterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private metaService: MetaService) { }
}
