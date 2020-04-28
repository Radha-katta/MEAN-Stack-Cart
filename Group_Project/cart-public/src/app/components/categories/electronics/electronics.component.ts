import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {


  category:string;
  constructor() { }

  ngOnInit(): void {
    this.category = "electronics";
  }

}
