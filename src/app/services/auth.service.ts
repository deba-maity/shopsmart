import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dbUrl = '/assets/db.json';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.dbUrl).pipe(
      map((data) => {
        const user = data.users.find(
          (u: any) => u.username === username && u.password === password
        );
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        }
        return false;
      })
    );
  }

  signup(username: string, password: string, email: string): Observable<boolean> {
    return this.http.get<any>(this.dbUrl).pipe(
      map((data) => {
        const exists = data.users.find((u: any) => u.username === username || u.email === email);
        if (exists) {
          return false; // User already exists
        }
        // Mock adding user (since we can't modify `db.json` directly in Angular):
        const newUser = { id: data.users.length + 1, username, password, email };
        console.log('New User:', newUser);
        return true;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
