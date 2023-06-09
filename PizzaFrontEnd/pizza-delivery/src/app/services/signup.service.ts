import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  isUserRegistered:boolean = false;

  private baseUrl = "http://localhost:62100/user/register"
  constructor(private http:HttpClient) { }

  registerUser(user: any){
    console.log(user)
   return this.http.post<any>(this.baseUrl,user)
  }
}
