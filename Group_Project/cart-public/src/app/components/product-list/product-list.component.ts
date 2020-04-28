import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  @Input() category:string;
  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   // alert(this.category?this.category:"");
    this.productService.getProductsOnCategory(this.category?this.category:"").then(res=>{
      this.products = res;
    });
  }

}
