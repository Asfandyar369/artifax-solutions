import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ThreeDScenesGamingRoomComponent } from './pages/our-services/three-d-scenes-gaming-room/three-d-scenes-gaming-room.component';
const routes = {
  home: 'home',
  portfolio: 'portfolio',
  ourServices: 'our-services',
  threeDScenes: '3d-scenes-gaming-room',
};
export const appRoutes: Routes = [
  { path: '', redirectTo: routes.home, pathMatch: 'full' }, // Redirect from empty path to /home
  { path: routes.home, component: HomeComponent },
  { path: routes.portfolio, component: PortfolioComponent },
  { path: routes.ourServices, component: OurServicesComponent },
  { path: `${routes.ourServices}/${routes.threeDScenes}`, component: ThreeDScenesGamingRoomComponent },
  // Add additional child routes here if needed
  // { path: 'our-services/streaming-graphics-design', component: GraphicsComponent },
  // { path: 'our-services/vtuber-model', component: VtuberComponent },
  // Uncomment and adjust these routes as needed
  // { path: 'shop', component: ShopComponent, children: [
  //   { path: 'my-account', component: AccountComponent },
  //   { path: 'cart', component: CartComponent },
  //   { path: 'check-out', component: CheckoutComponent },
  // ]},
  // { path: 'about', component: AboutComponent, children: [
  //   { path: 'customers', component: CustomersComponent },
  // ]},
  // { path: 'blogs', component: BlogsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'verify-designers', component: VerifyDesignersComponent },
  { path: '**', redirectTo: '/home' }
];
