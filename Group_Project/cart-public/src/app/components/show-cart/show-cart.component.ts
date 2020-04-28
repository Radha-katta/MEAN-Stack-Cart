import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  private loggedInUser: any;
  private cart: Cart;

  cartProducts = [];
  cartItems: any;
  cartTotal = 0;

  constructor(private cartService: CartService, private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    //load Cart Items on UI
    this.getAllItems();
  }

  getAllItems() {
    this.cartProducts = [];
    this.cartService.getAllCartItems(this.loggedInUser).then(res => {
      this.cart = res;
      this.cartItems = res.productList;
      this.getProductsInCart(this.cart);
    });
  }

  async getProductsInCart(userCartItem) {
    for (let cartItem of this.cartItems) {
      let productId = cartItem.productId;
      const data = await this.productService.getProduct(productId);
      this.cartProducts.push({data: data, quantity: cartItem.quantity, cartItem: userCartItem});
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.cartTotal = 0;
    this.cartProducts.forEach(item => {
      // this.cartUser = this.getCartUser(item.users);
      this.cartTotal += (parseInt(item.quantity) * parseInt(item.data.price));
    });
  }


  cartAction(event) {
    if (event.action == "decrement") {
      // event.quantity --;
      this.ModifyCartQuantity(event, true)
      // alert(JSON.stringify(event));
      this.cartService.incrementOrDecrementQuantity(event, this.loggedInUser).then(res => {
        this.getAllItems();
      });

    } else if (event.action == "increment") {
      this.ModifyCartQuantity(event, false);
      this.cartService.incrementOrDecrementQuantity(event, this.loggedInUser).then(res => {
        this.getAllItems();
      });

    } else if (event.action == "remove") {
      this.removeCartItem(event);
      this.cartService.incrementOrDecrementQuantity(event, this.loggedInUser).then(res => {
        this.getAllItems();
      });

    }
  }

  removeCartItem(ProductWithCartItem) {
    let productId = ProductWithCartItem.data._id;
    let productIdExists = false;
    for (let i = 0; i < ProductWithCartItem.cartItem.productList.length; i++) {
      let cp = ProductWithCartItem.cartItem.productList[i];
      if (cp.productId == productId) {
        ProductWithCartItem.cartItem.productList.splice(i, 1);
        break;
      }
    }

  }

  ModifyCartQuantity(ProductWithCartItem, decrement) {
    let productId = ProductWithCartItem.data._id;
    let productIdExists = false;
    for (let i = 0; i < ProductWithCartItem.cartItem.productList.length; i++) {
      let cp = ProductWithCartItem.cartItem.productList[i];
      if (cp.productId == productId) {
        if (decrement)
          cp.quantity = (parseInt(cp.quantity) - 1).toString();
        else
          cp.quantity = (parseInt(cp.quantity) + 1).toString();
        if (cp.quantity == 0) {
          ProductWithCartItem.cartItem.productList.splice(i, 1);
        }
        break;
      }
    }
  }

 /* placeOrder() {
    //this.router.navigate(["/productDetail", productItem._id]);
    alert("Place Order");
    this.router.navigate(["../checkout"]);
  }
*/
  async  placeOrder(cartProducts){
  //  await this.productService.sendProductData(cartProducts);
    setTimeout(()=>{
      this.router.navigate(["../checkout"]);
    }, 2000);

  }

}

