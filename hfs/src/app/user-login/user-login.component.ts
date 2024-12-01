import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent,HttpClientModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
   
    
    
    userName: any;
    password!: string;
    
    isValid!: boolean;
    constructor(private http:HttpClient, private router:Router){

    }
    onSubmit(){
      console.log(this.userName);
      
      this.http.get("http://localhost:8092/api/getemail/"+this.userName).subscribe((response) =>{
        if(response!==null){
          console.log(response);
          this.router.navigate(['/dashboard']);
        }
        else{
          alert("Invalid Credentials");
          this.router.navigate(['/home']);
        }
      })
     
    }
    onSignupSubmit(){
      this.router.navigate(['/user-register'])
    }
    
}
