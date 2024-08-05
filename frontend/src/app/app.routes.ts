// src/app/app.routes.ts

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
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VerifyDesignersComponent } from './pages/verify-designers/verify-designers.component';
// Constants
import { routes } from './constants/routes';
import { meta } from './constants/meta';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: routes.home,
    pathMatch: 'full'
  },
  {
    path: routes.home,
    component: HomeComponent,
    data: meta.home
  },
  {
    path: routes.portfolio,
    component: PortfolioComponent,
    data: meta.ourPortfolio
  },
  {
    path: routes.ourServices,
    component: OurServicesComponent,
    data: meta.ourServices
  },
  {
    path: `${routes.ourServices}/${routes.threeDScenes}`,
    component: ThreeDScenesGamingRoomComponent,
    data: meta.threeDScenes
  },
  {
    path: `${routes.ourServices}/${routes.streamingGraphicsDesign}`,
    component: StreamingGraphicsDesignComponent,
    data: meta.streamingGraphicsDesign
  },
  {
    path: `${routes.ourServices}/${routes.vtuberModel}`,
    component: VtuberModelComponent,
    data: meta.vtuberModel
  },
  {
    path: `${routes.shop}`,
    component: ShopComponent,
    data: meta.shop
  },
  {
    path: routes.myAccount,
    component: MyAccountComponent,
    data: meta.myAccount
  },
  {
    path: routes.cart,
    component: CartComponent,
    data: meta.cart
  },
  {
    path: routes.checkout,
    component: CheckoutComponent,
    data: meta.checkout
  },
  {
    path: routes.about,
    component: AboutComponent,
    data: meta.about
  },
  {
    path: routes.customers,
    component: CustomersComponent,
    data: meta.customers
  },
  {
    path: routes.blogs,
    component: BlogsComponent,
    data: meta.blogs
  },
  {
    path: routes.contact,
    component: ContactComponent,
    data: meta.contact
  },
  {
    path: routes.verifyDesigners,
    component: VerifyDesignersComponent,
    data: meta.verifyDesigners
  },
  {
    path: '**',
    redirectTo: routes.home
  }
];
