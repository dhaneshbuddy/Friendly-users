import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminName: string = 'Admin User';
  totalUsers: number = 250;
  reports: number = 35;
  logs: number = 120;
  analytics: string = 'High Usage';

  isDashboard: boolean = true; // ✅ to show/hide dashboard cards

  constructor(private router: Router) {
    // ✅ check current route and set flag
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isDashboard =
          event.urlAfterRedirects === '/admin' ;
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
