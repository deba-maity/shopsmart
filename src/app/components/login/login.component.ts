import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    // Fetch users from JSON Server
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      (users) => {
        const user = users.find(
          (u) => u.username === this.username && u.password === this.password
        );

        if (user) {
          localStorage.setItem('userId', user.id.toString());
          localStorage.setItem('password', user.password);
          alert('Login successful!');
          this.router.navigate(['products']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred while logging in. Please try again.';
        console.error(error);
      }
    );
  }
}
