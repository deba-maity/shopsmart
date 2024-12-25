import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username = '';
  password = '';
  email = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup(): void {
    this.authService.signup(this.username, this.password, this.email).subscribe((success) => {
      if (success) {
        this.successMessage = 'Signup successful. You can now log in.';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Username or email already exists.';
        this.successMessage = '';
      }
    });
  }
}
