import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RoombookComponent } from './roombook/roombook.component';

import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NowbookComponent } from './nowbook/nowbook.component';



@Component({
    selector: 'app-root',
    imports: [RouterOutlet,HeaderComponent,OurservicesComponent,FooterComponent,HomePageComponent,UsersComponent,UserLoginComponent,MainPageComponent,AdminLoginComponent,RoombookComponent,NowbookComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
})
export class AppComponent {
  title = 'Find Rooms';

  data:string[] = ["DashBoard", "Users", "Settings", "Logout"]
}
