import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import {HttpClient} from '@angular/common/http'
import { SignupService } from '../services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type:String = 'password'
  public signupForm!:FormGroup;
  data:any
  isUserRegistered:boolean = false
  snackBar: any;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router, private signupservice:SignupService) {
   }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required],
      mobileNumber:['',Validators.required]
    })
  }
  get fullname(){
    return this.signupForm.get('fullname');
  }
  get emailId(){
    return this.signupForm.get('emailId');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get mobileNumber(){
    return this.signupForm.get('mobileNumber');
  }

  register(){
    this.signupservice.registerUser(this.signupForm.value)
    .subscribe(response=>{alert("registered successfully")
    this.router.navigate(['/login'])})
    this.signupForm.reset();
  }
  onSubmit(){
    console.log(this.signupForm.value);
    this.signupservice.registerUser(this.signupForm.value).subscribe({
      next:response=>{
        this.data=response
        console.log(response);
        this.signupForm.reset();
        if(this.signupservice.isUserRegistered == true){
          this.router.navigateByUrl("/login")
        }
      }
    })
   alert("sucessfully login!!")
    }
  }
  // signUp(){
  //   this.http.post<any>("http://localhost:9500/userorderapp/register",this.signupForm.value)
  //   .subscribe(res=>{
  //     alert("Signup Successfull");
  //     this.router.navigateByUrl('/login')
  //     this.signupForm.reset();
  //   })
  // }
// }
