import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.css']
})
export class OrderedItemComponent implements OnInit {

  @Input('showOrderedItem') orderedItem ;

  constructor() { }

  ngOnInit(): void {
  }

}
