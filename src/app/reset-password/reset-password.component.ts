import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  resetPassword() {
    // Implement password reset logic here
    console.log('Resetting password...');
    // You can make an API call to your server to handle the password reset
  }
}

