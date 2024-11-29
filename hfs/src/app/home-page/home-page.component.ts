import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OurservicesComponent } from '../ourservices/ourservices.component';
import { FooterComponent } from '../footer/footer.component';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,OurservicesComponent,FooterComponent,MainPageComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
   
    
}
