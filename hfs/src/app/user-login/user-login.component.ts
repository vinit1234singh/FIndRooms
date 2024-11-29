import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
   
    
    
    userName!: string;
    password!: string;
    
    isValid!: boolean;
    router : Router = inject(Router);
    onSubmit(){
     
    }
    onSignupSubmit(){
      this.router.navigate(['/user-register'])
    }
    
}
