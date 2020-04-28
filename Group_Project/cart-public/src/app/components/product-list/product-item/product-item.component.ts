import { Component, OnInit , Input} from '@angular/core';
import {Product} from "../../../models/product";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private cartService: CartService, private router:Router) { }

  ngOnInit(): void {
    //this.cartService.sharedMessage.subscribe(message => this.message = message)
  }

  /*handleAddToCart(){
    this.cartService.sendMsg(this.productItem);
  }*/
  showProductDetail(productItem){
    this.router.navigate(["/productDetail", productItem._id]);
  }

  /*goToProductDetail() {
    this.cartService.nextMessage("Second Message")
  }
*/
}
