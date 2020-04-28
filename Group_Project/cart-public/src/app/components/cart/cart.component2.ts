/*
import { Component, OnInit } from '@angular/core';

import {CartService} from "../../services/cart.service";
import {Cart, CartUserProduct} from "../../models/cart";
import { Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {User} from "../../models/user";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent2 implements OnInit {

  cartItems = [];
  cartTotal =0;
  private loggedInUser: any;
  //cartUser: CartUser;
  cart:Cart;
  cartUserProduct:[CartUserProduct];
  constructor(private cartService : CartService, private productService: ProductService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedInUser= JSON.parse( sessionStorage.getItem("loggedInUser") );
    this.cartService.getMsg().subscribe((product:Product) =>
    {
      this.addToCartItems(product);
    });
  }

  calculateTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
     // this.cartUser = this.getCartUser(item.users);
      //this.cartTotal += (parseInt(this.cartUser.qty) * parseInt(item.price));
    });
  }

 /!* getCartUser(users:[CartUser]) :any{
    let cartUser;
      for(let user of users){
        if(user.userId === this.loggedInUser.userId){
          cartUser = user;
          break;
        }
      }
      return cartUser;
  }*!/

  addToCartItems(product:Product) :void{
    //add logged in userDetails to the product
    product = this.addUsersToProduct(product);
   //update the user details and quantity of the product
   /!* this.productService.updateUserInProduct(product).then(updatedProduct =>{
      this.showItemsInCart(updatedProduct);
      this.calculateTotal();
    });*!/

    this.cartService.getCartUser(product, this.loggedInUser).then(user =>{

    this.cart = user;
     if(this.cart ==null ||!this.cart.userId)//User Not existed
     {
       //inser user
       this.cartService.addUserAndProductToCart(product, this.loggedInUser).then();
     }else{
       //increase user product quantity in cart
       this.ModifyCartQuantity(product);
       this.cartService.incrementProductQuantityInCart(product, this.cart).then(res=>{
       });
     }
     // this.showItemsInCart(updatedProduct);
      //this.calculateTotal();
    });
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
*/
