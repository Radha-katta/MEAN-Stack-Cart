import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";
import {Product} from "../../../models/product";
import {CartUserProduct} from "../../../models/cart";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carts:any;
  success:string = "";
  loggedInUser: any;
  cart: any;

  constructor(private productService:ProductService,
              private router:Router,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
   /* this.productService.getProductData().subscribe( products =>{
      this.carts = products;
      //alert( this.cartProducts.length);
    });

    */
  }

  async checkOutDone(){

   // alert( "123" );
    //Move all the cart items to orderedItems
    await this.addToOrderedItems("");
    this.success = "Order Placed Successfully";

  }

  async addToOrderedItems(product:any) {
    let user = await this.cartService.getCartUser(product, this.loggedInUser);
    this.cart = user;
    this.cart.orderedProductsList = this.cart.productList;
    this.cart.productList=[];
   // alert(JSON.stringify(this.cart));
   let items=  await this.cartService.updateOrderedItems( this.cart, this.loggedInUser);
   //alert(JSON.stringify(items));
    this.router.navigate(["../order"]);
  }
}
