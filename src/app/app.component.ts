import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService, User } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperature = 26;
  currentDay = '';
  currentTime = '';
  showSidebar = true;  // control sidebar visibility

  constructor(private router: Router, private authService: AuthService) {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);

    // Listen to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = !this.isAuthPage();
      }
    });

    // Optional: redirect if already logged in
    const user: User | null = this.authService.getCurrentUser();
    if (user) {
      this.redirectByRole(user.role);
    }
  }

  updateClock() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  }

  isAuthPage(): boolean {
    const authPages = ['/login', '/signup'];
    return authPages.includes(this.router.url);
  }

  redirectByRole(role: string) {
    if (role === 'Admin') this.router.navigate(['/admin-home']);
    else if (role === 'SuperUser') this.router.navigate(['/superuser-home']);
    else this.router.navigate(['/user-home']);
  }
}
