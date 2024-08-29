import { Component } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  showOptions = false;

  resetPassword() {
    // Add logic for resetting password
    console.log('Reset Password clicked');
  }

  logout() {
    // Add logic for logout
    console.log('Logout clicked');
  }
}
