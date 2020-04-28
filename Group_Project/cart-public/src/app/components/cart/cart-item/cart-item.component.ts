import { Component, OnInit, Input } from '@angular/core';
//import {CartUser} from "../../../models/product";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:any;
  loggedInuser:any;
  cartItemUser :any;

  constructor() { }

  ngOnInit(): void {
    this.loggedInuser= JSON.parse( sessionStorage.getItem("loggedInUser") );
    this.getCartItemUser(this.cartItem.users);
  }
  getCartItemUser(users:[any]) :any{
    let cartUser;
    for(let user of users){
      if(user.userId === this.loggedInuser.userId){
        this.cartItemUser = user;
        break;
      }
    }
    return this.cartItemUser;
  }
}
