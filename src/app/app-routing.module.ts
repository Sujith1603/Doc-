import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ServicesComponent } from './services/services.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'appointments', component: AppointmentsComponent},

  { path: 'login', component: LoginComponent },
  { path : 'about', component: AboutComponent},
  { path : 'contact', component: ContactComponent},
  
  { path : 'profile', component: ProfileComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'resetPassword', component: ResetPasswordComponent},
  { path: 'editProfile', component: EditProfileComponent},
  { path: 'home', component: HomeComponent},
  { path: 'doctorprofile/:id', component:DoctorProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
