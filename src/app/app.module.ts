import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AdminModule } from './admin/admin.module';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { BorrowBookComponent } from './user/borrow-book/borrow-book.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { HomeComponent } from './user/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminHeaderComponent,
    AddBooksComponent,
    AboutComponent,
    ContactComponent,
    BorrowBookComponent,
    AddUserComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AboutModule,
    ContactModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
