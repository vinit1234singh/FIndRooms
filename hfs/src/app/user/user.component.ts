import { Component, inject, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { catchError, Observable, tap, throwError } from 'rxjs';


@Component({
  standalone:true,
  selector: 'app-users',
  imports:[FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UsersComponent {
  
  userName!: string;
  age!: number;
  address!: string;
  email!: string;
  mobileNo!: number;
  password!: string;
  confirmpassword!: string;
  occupation!: string;
  createUser(){
    
  }

  
    
  }

