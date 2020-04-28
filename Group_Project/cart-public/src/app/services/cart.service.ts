import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public subject2 = new Subject();
  cartsUrl: string = "http://localhost:3000/api/carts";
  orderedUrl: string = "http://localhost:3000/api/ordered";

  public sub ;
  public cast;


product;
  constructor(private http: HttpClient) { }
  sendMsg(product:Product){
    this.subject2.next(product);//Triggering an event
  }
  getMsg():Observable<any>{
    return this.subject2.asObservable();
  }


  getCartUser(product:Product, loggedInUser):Promise<Cart> {
    return this.http.get(this.cartsUrl + "/" + loggedInUser.userId).toPromise().then(res => {
      return res as Cart
    })
      .catch(this.handleError);
  }

  addUserAndProductToCart(product:Product, loggedInUser):Promise<any> {
    return this.http.post(this.cartsUrl + "/" + loggedInUser.userId, product).toPromise().then(res => {
      return res as Cart
    })
      .catch(this.handleError);
  }
  incrementProductQuantityInCart(product:Product, cartItem):Promise<any>{
    return this.http.put(this.cartsUrl + "/" + cartItem.userId, cartItem).toPromise().then(res => {
      return res as Cart
    })
      .catch(this.handleError);
  }

  getAllCartItems(loggedInUser){
    return this.http.get(this.cartsUrl + "/" + loggedInUser.userId).toPromise().then(res => {
      return res as Cart
    })
      .catch(this.handleError);
  }

  incrementOrDecrementQuantity(productWithCartUser, loggedInUser):Promise<any>{
    return this.http.put(this.cartsUrl + "/" + loggedInUser.userId, productWithCartUser).toPromise().then(res => {
      return res as Cart
    }).catch(this.handleError);
  }

  removeItemsFromCart(loggedInUser) :Promise<any>{
    return this.http.put(this.cartsUrl + "/delete/" + loggedInUser.userId, {}).toPromise().then(res => {
      return res as Cart
    }).catch(this.handleError);

  }

  updateOrderedItems(cart, loggedInUser):Promise<any> {
    return this.http.put(this.orderedUrl + "/update/" + loggedInUser.userId, cart).toPromise().then(res => {
      return res as Cart
    }).catch(this.handleError);
  }


  handleError(error: any){
    console.log(error);
    return  null;
  }
}

