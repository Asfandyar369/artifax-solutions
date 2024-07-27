import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Logo, Navbar } from '../../../../interface/Navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, NgSwitchCase, NgSwitch, SlicePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navbar: Logo | undefined | null;
  buttonItem: Navbar | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getNavbar();
    this.findButtonItem();
  }

  private getNavbar(): void {
    this.navbar = {
      id: 1,
      url: 'images/White-and-Light-Blue.png',
      navbarMenus: [
        { id: 8, name: 'Home', link: '/', nestedMenus: [] },
        { id: 9, name: 'Our Portfolio', link: '/portfolio', nestedMenus: [] },
        {
          id: 10, name: 'Our Services', link: '/our-services', nestedMenus: [
            { id: 1, name: '3D Scenes & Gaming Room', link: '/our-services/3d-scenes-gaming-room' },
            { id: 2, name: 'Streaming Graphics Design', link: '/our-services/streaming-graphics-design' },
            { id: 3, name: 'VTuber Model', link: '/our-services/vtuber-model' }
          ]
        },
        {
          id: 11, name: 'Shop', link: '/shop', nestedMenus: [
            { id: 4, name: 'My account', link: '/my-account' },
            { id: 5, name: 'Cart', link: '/cart' },
            { id: 6, name: 'Checkout', link: '/check-out' }
          ]
        },
        {
          id: 12, name: 'About', link: '/about', nestedMenus: [
            { id: 7, name: 'Customers', link: '/customers' }
          ]
        },
        { id: 13, name: 'Blogs', link: '/blogs', nestedMenus: [] },
        { id: 14, name: 'Contact', link: '/contact', nestedMenus: [] },
        { id: 15, name: 'bi bi-cart green', link: '/cart', nestedMenus: [] },
        { id: 16, name: 'Verify Designers', link: '/verify-designers', nestedMenus: [] }
      ]
    };
  }

  // New function to find the button item
  private findButtonItem(): void {
    this.buttonItem = this.navbar?.navbarMenus?.find(
      (item) => item.name === 'Verify Designers'
    );
  }

  getMenuColumns(): { left: Navbar[]; right: Navbar[] } {
    const menus = this.navbar?.navbarMenus || [];
    return {
      left: menus.slice(0, 4), // First 4 items
      right: menus.slice(4, 8) // Next 4 items
    };
  }
}
