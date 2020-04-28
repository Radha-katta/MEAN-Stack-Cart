import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userUrl = 'http://localhost:3000/api/userLogin';

  user:any;

  constructor(private  http: HttpClient) { }

  getUser(userName:string): Promise<User | void>{
    return this.http.get(this.userUrl+"/"+userName).toPromise().then(res => {
      this.user = res;
      return res as User;
    })
      .catch(this.handleError);
  }

  addUser(user): Promise<User | void>{
    return this.http.post(this.userUrl, user).toPromise().then(res => {
      this.user = res;
      return res as User;
    })
      .catch(this.handleError);

  }
  handleError(error: any){
    console.log(error);
  }
}
