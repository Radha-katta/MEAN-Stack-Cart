import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../components/user/user.component';
import {LoginComponent} from '../components/login/login.component';
import {ProductListComponent} from "../components/product-list/product-list.component";
import {HomeComponent} from "../components/home/home.component";
import {MenComponent} from "../components/categories/men/men.component";
import {WomenComponent} from "../components/categories/women/women.component";
import {KidsComponent} from "../components/categories/kids/kids.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {CartComponent} from "../components/cart/cart.component";
import {ShowCartComponent} from "../components/show-cart/show-cart.component";
import {ProductDetailComponent} from "../components/product-list/product-detail/product-detail.component";
import {CheckoutComponent} from "../components/show-cart/checkout/checkout.component";
import {OrderComponent} from "../components/order/order.component";
import {FurnitureComponent} from "../components/categories/furniture/furniture.component";
import {ElectronicsComponent} from "../components/categories/electronics/electronics.component";
import {OrderedListComponent} from "../components/ordered-list/ordered-list.component";
import {AuthGuard} from "../services/auth.guard";


const routes: Routes = [
  {path : '', component : LoginComponent, data:{login: "login"}},
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent ,  data:{login: "login"}},
  { path: 'men', component: MenComponent , canActivate:[AuthGuard]},
  { path: 'women', component: WomenComponent, canActivate:[AuthGuard] },
  { path: 'kids', component: KidsComponent, canActivate:[AuthGuard] },
  { path: 'furniture', component: FurnitureComponent , canActivate:[AuthGuard]},
  { path: 'electronics', component: ElectronicsComponent, canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'cart', component: ShowCartComponent, canActivate:[AuthGuard] },
  { path: 'orderItems', component: OrderedListComponent, canActivate:[AuthGuard] },
  { path: 'productDetail/:productId', component: ProductDetailComponent , canActivate:[AuthGuard]},
  { path: 'checkout', component: CheckoutComponent , canActivate:[AuthGuard]},
  { path: 'order', component: OrderComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundComponent, canActivate:[AuthGuard] },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
