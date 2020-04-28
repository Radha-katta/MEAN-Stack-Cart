import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  loggedInUser;
  product:any;
  cart;
  cartItems;
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService,
              private cartService: CartService, private router:Router) { }

 async ngOnInit() {
   this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    let productId = this.activatedRoute.snapshot.params.productId;
    this.product =  await this.productService.getProduct(productId);
    if(this.product == undefined){
      this.product = new Product("","","",0,"","");
    }

  }

   handleAddToCart(product){
    this.cartService.sendMsg(this.product);
     this.addToCartItems(product);
  }

 async addToCartItems(product:Product) {
    let user = await this.cartService.getCartUser(product, this.loggedInUser);
    this.cart = user;
    if(this.cart ==null ||!this.cart.userId)//User Not existed
    {
      //insert user
      await this.cartService.addUserAndProductToCart(product, this.loggedInUser);
      this.router.navigate(["../../cart"]);
    }else{
      //increase user product quantity in cart
      this.ModifyCartQuantity(product);
      await this.cartService.incrementProductQuantityInCart(product, this.cart);
      this.router.navigate(["../../cart"]);
    }


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
