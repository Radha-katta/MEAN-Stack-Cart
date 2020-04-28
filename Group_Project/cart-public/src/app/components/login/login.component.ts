import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginService} from "../../services/login.service";
import {User} from "../../models/user";
import {ProductService} from "../../services/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{
  constructor(private router: Router, private loginService:LoginService, private productService:ProductService) { }
  username: string;
  password: string;
  user:any;

  invalidMessage:string;
  //signUpSuccessMessage:string;
  signUpUserExised:string;

  showSpinner: true;
  ngOnInit() {

  }

  login(username, password) : void {
    let validUser = false;
    this.username = username;
    this.password = password;
     this.loginService.getUser(this.username).then( user =>{
      this.user = user;

      if(user == undefined){
        this.setInvalidErrorMessage("User not existed.Please sign up");
      }

       if(this.username == this.user.userId && this.password == this.user.password){
         sessionStorage.setItem("loggedInUser", JSON.stringify(this.user));
         validUser = true;
         this.router.navigate(["/home"]);
       }
       this.setInvalidErrorMessage(validUser?"":"Invalid Credentials");
     });
  }

  setInvalidErrorMessage(message){
    this.invalidMessage= message;
  }


  async signUp(username, password){
    this.username = username;
    this.password = password;
    let userExisted = false;

    let user = new User(this.username, this.password);
    let existedUser = await this.loginService.getUser(this.username);
    if(existedUser == undefined){
      let newUser= this.loginService.addUser(user);
    }else{
      userExisted = true;
    }
    this.signUpMessage(userExisted ? "User Already Existed" :"Registered Successfully.Please sign In");
  }

  signUpMessage(msg){
    this.signUpUserExised  = msg;
  }

  ngOnDestroy(){
    this.productService.user = this.user;
  }
}

