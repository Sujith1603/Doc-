import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: any; 
  constructor() {
    this.userData = {
      id: 1,
      firstName: 'sujith',
      lastName: 'Don',
      email: 'don@example.com',
    };
  }

  getUserData(): any {
    return { ...this.userData };
  }

  updateUserData(updatedUserData: any): void {
    // Update the user data
    this.userData = { ...this.userData, ...updatedUserData };
  }
}
