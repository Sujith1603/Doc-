import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    fullName: '',
    username: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  countryCodes = [
    { name: 'United States', code: '1' },
    { name: 'Canada', code: '1' },
    { name: 'United Kingdom', code: '44' },
    { name: 'India', code: '91' },
  ];

  constructor(private httpClient: HttpClient) {}

  onSubmit() {
    this.httpClient.post('https://docdemo-ea72b-default-rtdb.firebaseio.com/sign.json/signup',this.user).subscribe((res)=>{
      console.log('User submitted:', this.user);

    })

}
}