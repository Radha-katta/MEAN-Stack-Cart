import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'cart-public';

  sub;
  info;
  showNavBar:boolean;
  constructor(private router: Router, private routes: ActivatedRoute) {

  }
  ngOnInit(){

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.info = data.state.root.firstChild.data;
        //alert(JSON.stringify(this.info.login));
        if(this.info.login== "login"){
          this.showNavBar = false;
        }else{
          this.showNavBar = true;
        }
      }
    });
  }

  ngOnDestroy(){
   // this.sub.unsubscribe();
  }

}
