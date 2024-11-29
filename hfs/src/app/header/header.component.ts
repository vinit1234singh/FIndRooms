import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [CommonModule,RouterLink,RouterOutlet],
    styleUrls: ['./header.component.css'],
    standalone: true
})
export class HeaderComponent {
    Navigation = [
        {label:'Home', href: "/home"},
        {label:'Our Services', href: "/aboutservices"},
        {label:'Admin Login', href:'/admin-login'},
        {label: 'User Login', href:'/user-login'},
        
      ];

}
