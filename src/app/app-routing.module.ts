import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './user/home/home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { BorrowBookComponent } from './user/borrow-book/borrow-book.component';
import { AddUserComponent } from './admin/add-user/add-user.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'addbooks',component:AddBooksComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'borrowbook',component:BorrowBookComponent},
  {path:'adduser',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
