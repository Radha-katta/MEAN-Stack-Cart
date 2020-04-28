import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  category:string;
  constructor() { }

  ngOnInit(): void {
    this.category = "furniture";
  }

}
