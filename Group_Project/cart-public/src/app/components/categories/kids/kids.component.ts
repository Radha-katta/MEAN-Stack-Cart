import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  category:string;
  constructor() { }

  ngOnInit(): void {
    this.category = "kids";
  }
}
