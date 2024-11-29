import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
})
export class FooterComponent {
  obj = new MyClass(); // Declare 'obj' as a class property
  year: number = this.obj.d.getFullYear(); // Access the date

  constructor() {
    console.log(`The year is: ${this.year}`);
  }
}

class MyClass {
  d = new Date(); // Declare the date property in MyClass
}
