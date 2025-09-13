import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  // example analytics data
  totalUsers = 120;
  reportsGenerated = 35;
  systemLogs = 78;
  activeSessions = 23;
}
