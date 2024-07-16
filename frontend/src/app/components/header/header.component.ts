import { Component, OnInit } from '@angular/core';
import { Logo } from '../../interface/Navbar';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from './service/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, NgSwitchCase, NgSwitch],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  navbar: Logo | undefined | null;
  constructor(
    private navbarService: HeaderService,
  ) { }
  ngOnInit(): void {
    this.getNavbar();
  }

  private getNavbar(): void {
    this.navbarService.getAllNavbars().subscribe(
      (data: Logo) => {
        this.navbar = data;
      },
      (error) => {
        console.error('Error fetching navbars:', error);
      }
    );
  }
}

