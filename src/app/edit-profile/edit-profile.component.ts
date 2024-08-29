import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
   
    const userData = this.userService.getUserData(); 
    this.profileForm = this.fb.group({
      firstName: [userData.firstName, Validators.required],
      lastName: [userData.lastName, Validators.required],
      email: [userData.email, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedUserData = this.profileForm.value;
      this.userService.updateUserData(updatedUserData);
      
      this.router.navigate(['/dashboard']);
    }
  }
}

