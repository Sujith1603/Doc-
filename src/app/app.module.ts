import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserIconComponent } from './usericon/usericon.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PowerComponent } from './power/power.component';
import { HoverComponent } from './hover/hover.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { DarkModeService } from './dark-mode/dark-mode.service';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { DprofileService } from './dprofile.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UserIconComponent,
    ProfileComponent,
    PowerComponent,
    HoverComponent,
    LoginComponent,
    DarkModeComponent,
    SignupComponent,
    ResetPasswordComponent,
    EditProfileComponent,
    ServicesComponent,
    AppointmentsComponent,
    DoctorProfileComponent,
    
    
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule

    
  ],
  providers: [DarkModeService,DprofileService],
  bootstrap: [AppComponent],
  
 
})
export class AppModule { }
