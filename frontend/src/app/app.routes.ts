import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ThreeDScenesGamingRoomComponent } from './pages/our-services/three-d-scenes-gaming-room/three-d-scenes-gaming-room.component';
import { StreamingGraphicsDesignComponent } from './pages/our-services/streaming-graphics-design/streaming-graphics-design.component';
import { VtuberModelComponent } from './pages/our-services/vtuber-model/vtuber-model.component';
import { ShopComponent } from './pages/shop/shop.component';
import { MyAccountComponent } from './pages/shop/my-account/my-account.component';
import { CartComponent } from './pages/shop/cart/cart.component';
import { CheckoutComponent } from './pages/shop/checkout/checkout.component';
import { AboutComponent } from './pages/about/about.component';
import { CustomersComponent } from './pages/about/customers/customers.component';
const routes = {
  home: 'home',
  portfolio: 'portfolio',
  ourServices: 'our-services',
  threeDScenes: '3d-scenes-gaming-room',
  streamingGraphicsDesign: "streaming-graphics-design",
  vtuberModel: "vtuber-model",
  shop: 'shop',
  myAccount: 'my-account',
  cart: 'cart',
  checkout: 'checkout',
  about: 'about',
  customers: 'customers',
};
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: routes.home,
    pathMatch: 'full'
  },
  {
    path: routes.home,
    component: HomeComponent
  },
  {
    path: routes.portfolio,
    component: PortfolioComponent
  },
  {
    path: routes.ourServices,
    component: OurServicesComponent
  },
  {
    path: `${routes.ourServices}/${routes.threeDScenes}`,
    component: ThreeDScenesGamingRoomComponent
  },
  {
    path: `${routes.ourServices}/${routes.streamingGraphicsDesign}`,
    component: StreamingGraphicsDesignComponent
  },
  {
    path: `${routes.ourServices}/${routes.vtuberModel}`,
    component: VtuberModelComponent
  },
  {
    path: `${routes.shop}`,
    component: ShopComponent
  },
  {
    path: routes.myAccount,
    component: MyAccountComponent
  },
  {
    path: routes.cart,
    component: CartComponent
  },
  {
    path: routes.checkout,
    component: CheckoutComponent
  },
  {
    path: routes.about,
    component: AboutComponent
  },
  {
    path: routes.customers,
    component: CustomersComponent
  },
  {
    path: '**', redirectTo: '/home'
  }
];
