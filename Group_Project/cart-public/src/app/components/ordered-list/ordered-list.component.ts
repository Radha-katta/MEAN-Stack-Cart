import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-ordered-list',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['./ordered-list.component.css']
})
export class OrderedListComponent implements OnInit {

  constructor(private cartService:CartService, private productService:ProductService) { }
  loggedInUser;
  private cart: Cart;

  orderedProducts = [];
  orderItems: any;
  cartTotal;

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    //load Cart Items on UI
    this.getAllItems();
  }

  getAllItems() {
    this.orderedProducts = [];
    this.cartService.getAllCartItems(this.loggedInUser).then(res => {
     // alert(JSON.stringify(res));
      this.cart = res;
      this.orderItems = res.orderedProductsList;
      this.getProductsInCart(this.cart);
    });
  }

  async getProductsInCart(userCartItem) {
    for (let cartItem of this.orderItems) {
      let productId = cartItem.productId;
      const data = await this.productService.getProduct(productId);
      this.orderedProducts.push({data: data, quantity: cartItem.quantity, cartItem: userCartItem});
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.cartTotal = 0;
    this.orderedProducts.forEach(item => {
      // this.cartUser = this.getCartUser(item.users);
      this.cartTotal += (parseInt(item.quantity) * parseInt(item.data.price));
    });
  }
}
