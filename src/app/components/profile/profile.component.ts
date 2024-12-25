import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  orders: any[] = [];
  userId: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.userId = userId ? parseInt(userId, 10) : null;

    if (this.userId) {
      this.http
        .get<any[]>(`http://localhost:3000/orders?userId=${this.userId}`)
        .subscribe((data) => (this.orders = data));
    } else {
      alert('Please log in to view your profile.');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('password');
    alert('You have logged out.');
    this.router.navigate(['/login']);
  }
}
