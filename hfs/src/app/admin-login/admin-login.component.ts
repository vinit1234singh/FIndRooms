import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  imports: [FormsModule, CommonModule,HeaderComponent],
  standalone: true
})
export class AdminLoginComponent {
    email!: string;
    password!: string;
    
    isValid!: boolean;

  OnLogin(){

  }

}
