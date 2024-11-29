import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  imports: [CommonModule,RouterLink,RouterOutlet],
  styleUrls: ['./ourservices.component.css'],
  standalone: true
})
export class OurservicesComponent {

}
