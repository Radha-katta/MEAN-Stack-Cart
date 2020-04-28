import {Component, OnDestroy, OnInit} from '@angular/core';

import {CartService} from "../../services/cart.service";
import {Cart, CartUserProduct} from "../../models/cart";
import { Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {User} from "../../models/user";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems = [];
  cartTotal =0;
  private loggedInUser: any;
  //cartUser: CartUser;
  cart:Cart;
  cartUserProduct:[CartUserProduct];
  subscription: Subscription;
  constructor(private cartService : CartService, private productService: ProductService,
              private loginService:LoginService, private router:Router) { }

   ngOnInit() {
    this.loggedInUser= JSON.parse( sessionStorage.getItem("loggedInUser") );
     this.subscription = this.cartService.getMsg().subscribe((product:any) =>
     {
       alert("123");
       this.addToCartItems(product);
     });

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

   addToCartItems(product:Product) {
    alert(JSON.stringify(product));
    this.cartService.getCartUser(product, this.loggedInUser).then(user =>{
      this.cart = user;
      //alert(this.cart);
     if(this.cart ==null ||!this.cart.userId)//User Not existed
     {
       //insert user
       this.cartService.addUserAndProductToCart(product, this.loggedInUser).then();
     }else{
       //increase user product quantity in cart
       this.ModifyCartQuantity(product);
       this.cartService.incrementProductQuantityInCart(product, this.cart).then(res=>{
       });
     }
    });
   this.router.navigate(["../../cart"]);

    /* let user = await this.cartService.getCartUser(product, this.loggedInUser);
     this.cart = user;
     if(this.cart ==null ||!this.cart.userId)//User Not existed
     {
       //insert user
       alert("insert User");
       await this.cartService.addUserAndProductToCart(product, this.loggedInUser);
     }else{
       //increase user product quantity in cart
       alert("add User");
       this.ModifyCartQuantity(product);
       await this.cartService.incrementProductQuantityInCart(product, this.cart);
     }*/
  }


  getAllCartItems(){
    this.cartService.getAllCartItems(this.loggedInUser).then(res=>{
      this.cart = res;

      this.cartItems = this.cart.productList;
    });
  }

  ModifyCartQuantity(product:Product){
    let productIdExists =false;
    for(let cp of this.cart.productList){
      if(cp.productId == product._id){
        productIdExists = true;
        cp.quantity = (parseInt(cp.quantity)+1).toString();
        break;
      }
    }

    if(!productIdExists){
      this.cart.productList.push({productId: product._id, quantity:"1"});
    }
  }

  showItemsInCart(product: any){
    let foundIndex = this.cartItems.findIndex(item => item.id == product.id);
    if(foundIndex!=-1)
      this.cartItems[foundIndex] = product;
    else
      this.cartItems.push(product);
  }

  addUsersToProduct(product): Product{
    let userExists = false;
       product.users.forEach(user =>{
         if(user.userId ==  this.loggedInUser.userId){
           userExists = true;
           user.qty++;
         }
       });
     if(!userExists){
       product.users.push({userId:this.loggedInUser.userId, qty: 1 });
     }
     return product;
  }
}
