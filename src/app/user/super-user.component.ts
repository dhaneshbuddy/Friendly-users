import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent {
  superUserName: string = 'Super user';
  totalUsers: number = 150;
  reports: number = 18;
  analytics: string = 'Active Usage';

  isMenuOpen: boolean = true;
  
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
