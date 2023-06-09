import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://localhost:62100/user/login";
  constructor(private http:HttpClient) { }

  loginUser(user: any){
    console.log(user)
    return this.http.post(this.baseUrl,user);
  }
  addToCart(item: any){
    return this.http.put("http://localhost:32100/user/addorder/${emailId}",item);
  }
  removeItem(item:any){
    return this.http.delete("http://localhost:32100/user/addorder/${items}")
  }
}

