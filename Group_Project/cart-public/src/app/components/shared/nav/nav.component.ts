import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clearSession(){
    sessionStorage.setItem("loggedInUser", "");
    this.router.navigate(["/"]);
  }
  showCartItems(){
    this.router.navigate(['../cart']);
  }

  showOrderedItems(){
    this.router.navigate(['../orderItems']);
  }

}
