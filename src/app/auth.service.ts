// auth.service.ts
import { Injectable } from '@angular/core';

interface User {
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

  signup(user: User): boolean {
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      return false; // User already exists
    }
    this.users.push(user);
    return true;
  }

  login(email: string, password: string, role: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) return false; // Invalid email/password
    if (user.role !== role) return false; // Role mismatch
    return true;
  }
}
