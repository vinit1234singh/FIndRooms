import { Component, inject, Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-users',
  imports:[CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UsersComponent {
  
  userRegister:FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {
  
  this.userRegister = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    address: ['', Validators.required],
    age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    password:['',[Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$")]],
    confirmpassword: ['',Validators.required]
  }
  // {
  //   Validators: mustMatch('password', 'confirmpassword'),
  // }
);
}
onSubmit() {
  if(this.userRegister.value.password == this.userRegister.value.confirmpassword){
    if (this.userRegister.valid) {
      const formData = this.userRegister.value;
      // Here you can sanitize the data before sending it to the server
      console.log('Form Submitted:', formData);
      // You can also perform additional sanitization if necessary
      this.http.post("http://localhost:8092/api/register",formData).subscribe((response) =>{
        console.log(response);
        alert("Registration Success");
        this.router.navigate(["/user-login"]);
      });
    } 
  else{
    alert("Password and Confirm Password is not same")
  }
}
    else {
      alert("Something is Missing")
  }
}

  
    
  }

