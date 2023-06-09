import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import {HttpClient} from '@angular/common/http'
import { User } from '../user';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  type:string ='password';
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }else{
      console.log("Incorrect Email or Password")
    }
  }

  // login(){
  //   console.log(this.user);
  //   this.loginService.loginUser(this.user).subscribe(Response =>{
  //     alert("Sucessfully Login")
  //   });

  
  login(){
    this.http.get<any>("http://localhost:62100/user/login")
    console.log(this.loginForm.value)
    this.loginService.loginUser(this.loginForm.value)
    .subscribe(response =>{console.log(response)
    this.router.navigateByUrl('/home')}
    )
    
    // const user = res.find((a:any)=>{
  //     return a.emailId === this.loginForm.value.emailId && a.password === this.loginForm.value.password
  //   });
  //   if(user){
  //     alert("Login Success");
  //     this.loginForm.reset();
  //     this.router.navigateByUrl('home')
  //   }else{
  //     alert("User Not Found!!")
  //   }
  //   },err => {
  //     alert("Something Went Wrong!!")
  //   })
  // }
}
}
