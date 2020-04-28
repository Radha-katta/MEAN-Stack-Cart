import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl: string = "http://localhost:3000/api/products";
  productsCategoryUrl:string = "http://localhost:3000/api/productsCategory";

  products: Product[] =[];
  user:any;

  constructor(private http:HttpClient) { }

  /*subject = new Subject();
  sendProductData(cartProducts){
    this.subject.next(cartProducts);//Triggering an event
  }
  getProductData(){
    return this.subject.asObservable();
  }*/


  getProductsOnCategory(category): Promise<Product[] | void>{
    return this.http.get(this.productsCategoryUrl+"/"+category).toPromise().then(res => {
      return res as Product[]})
      .catch(this.handleError);
  }
  getProduct(productId): Promise<Product | void>{
    return this.http.get(this.productsUrl+"/"+productId).toPromise().then(res => {
      return res as Product})
      .catch(this.handleError);
  }


  /**On click of Add to cart, User Details gets added to the product.user
   *
   */
 /* updateUserInProduct(product:Product):Promise<Product | void> {
    return this.http.put(this.productsUrl+"/"+product._id,  product).toPromise().then(res => {
      return res as Product})
      .catch(this.handleError);
  }*/


  handleError(error: any){
    console.log(error);
  }
}
