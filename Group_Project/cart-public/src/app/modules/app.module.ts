import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../components/user/user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomMaterialModule} from "./material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./AppRoutingModule";
import {NavComponent} from "../components/shared/nav/nav.component";
import {FooterComponent} from "../components/shared/footer/footer.component";
import {ProductListComponent} from "../components/product-list/product-list.component";
import {ProductItemComponent} from "../components/product-list/product-item/product-item.component";
import {HomeComponent} from "../components/home/home.component";
import {CartItemComponent} from "../components/cart/cart-item/cart-item.component";
import {CartComponent} from "../components/cart/cart.component";
import {HttpClientModule} from "@angular/common/http";
import {WomenComponent} from "../components/categories/women/women.component";
import {MenComponent} from "../components/categories/men/men.component";
import {KidsComponent} from "../components/categories/kids/kids.component";
import {ShowCartComponent} from "../components/show-cart/show-cart.component";
import {ShowCartItemComponent} from "../components/show-cart/show-cart-item/show-cart-item.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {ProductDetailComponent} from "../components/product-list/product-detail/product-detail.component";
import {CheckoutComponent} from "../components/show-cart/checkout/checkout.component";
import {OrderComponent} from "../components/order/order.component";
import {ElectronicsComponent} from "../components/categories/electronics/electronics.component";
import {FurnitureComponent} from "../components/categories/furniture/furniture.component";
import {OrderedItemComponent} from "../components/ordered-list/ordered-item/ordered-item.component";
import {OrderedListComponent} from "../components/ordered-list/ordered-list.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NavComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
    CartComponent,
    CartItemComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ShowCartComponent,
    ShowCartItemComponent,
    ProductDetailComponent,
    CheckoutComponent,
    OrderComponent,
    FurnitureComponent,
    ElectronicsComponent,
    OrderedListComponent,
    OrderedItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
