import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  category:string;
  constructor() { }

  ngOnInit(): void {
    this.category = "men";
  }

}
