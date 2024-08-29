import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-usericon',
  templateUrl: './usericon.component.html',
  styleUrls: ['./usericon.component.css']
})
export class UserIconComponent  {
  showOptions = false;

  editProfile() {
    // Add logic for logout
    console.log('Edit Profile clicked');
  }
  
  resetPassword() {
    // Add logic for resetting password
    console.log('Reset Password clicked');
  }

  logout() {
    // Add logic for logout
    console.log('Logout clicked');
  }

 

 
}

