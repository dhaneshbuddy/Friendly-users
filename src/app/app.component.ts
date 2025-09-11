import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperature = 26; 
  currentDay = '';
  currentTime = '';

  constructor(private router: Router) {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
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
}
