import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export interface User {
  role: string;
  customerName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor() {
    // Load users from localStorage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  // Signup
  signup(user: User): Observable<any> {
    const exists = this.users.find(u => u.email === user.email && u.role === user.role);
    if (exists) {
      return throwError(() => new Error('User already exists with this email and role'));
    }
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users)); // ✅ save
    return of({ message: 'Signup successful' });
  }

  // Login
  login(email: string, password: string, role: string): Observable<User> {
    const user = this.users.find(u => u.email === email && u.password === password && u.role === role);
    if (!user) {
      return throwError(() => new Error('Invalid credentials or role'));
    }
    localStorage.setItem('currentUser', JSON.stringify(user)); // ✅ save current user
    return of(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
