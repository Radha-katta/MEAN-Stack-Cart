import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  category:string;

  constructor() { }

  ngOnInit(): void {
    this.category = "women";
  }


}
