import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-cart-item',
  templateUrl: './show-cart-item.component.html',
  styleUrls: ['./show-cart-item.component.css']
})
export class ShowCartItemComponent implements OnInit {


  @Input('showcartItem') cartItem ;

  @Output() outputToParent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  decrementProductQuantity(){
    //decrement the quantity in carts table and get fresh list of cart items
    this.cartItem.action = "decrement";
    this.outputToParent.emit(this.cartItem);

  }

  incrementProductQuantity(){
    this.cartItem.action = "increment";
    this.outputToParent.emit(this.cartItem);
  }

  removeCartItem(cartItem){
    this.cartItem.action = "remove";
    this.outputToParent.emit(this.cartItem);
  }

}
