import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoombookComponent } from '../roombook/roombook.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,RoombookComponent],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  logout(){

  }
  name:any = "Vinit";
  email:any = "sdadas@asa.as";
  Navigation = [
    {label:'Dashboard', href: "/dashboard"},
    {label:'Show Room', href: "/showroom"},
    {label:'Payment Status', href:'/payment'},
    {label: 'Logout', href:'/logout'},
    
  ];

}
