import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoombookComponent } from './roombook/roombook.component';

import { HttpClient } from '@angular/common/http';
import { NowbookComponent } from './nowbook/nowbook.component';

export const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UsersComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'aboutservices', component:OurservicesComponent},
  { path: 'admin-login', component:AdminLoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'room-book', component:RoombookComponent},
  { path: 'booknow', component:NowbookComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
