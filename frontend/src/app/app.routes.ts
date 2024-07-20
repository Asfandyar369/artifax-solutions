import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection from empty path to /home
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  // {
  //   path: 'services', component: ServicesComponent, children: [
  //     { path: '3d-scenes-gaming-room', component: ScenesComponent },
  //     { path: 'streaming-graphics-design', component: GraphicsComponent },
  //     { path: 'vtuber-model', component: VtuberComponent },
  //   ]
  // },
  // {
  //   path: 'shop', component: ShopComponent, children: [
  //     { path: 'my-account', component: AccountComponent },
  //     { path: 'cart', component: CartComponent },
  //     { path: 'check-out', component: CheckoutComponent },
  //   ]
  // },
  // {
  //   path: 'about', component: AboutComponent, children: [
  //     { path: 'customers', component: CustomersComponent },
  //   ]
  // },
  // { path: 'blogs', component: BlogsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'verify-designers', component: VerifyDesignersComponent },
];
