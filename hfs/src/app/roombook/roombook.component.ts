import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-roombook',
  templateUrl: './roombook.component.html',
  styleUrls: ['./roombook.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class RoombookComponent {

  constructor(private router:Router){}

  roombooking(){
    this.router.navigate(['/booknow']);
  }

  

}
