import { Component } from '@angular/core';

@Component({
  selector: 'app-superanalytics',
  templateUrl: './superanalytics.component.html',
  styleUrls: ['./superanalytics.component.css']
})
export class SuperanalyticsComponent {
  // example analytics data
  totalUsers = 120;
  reportsGenerated = 35;
  systemLogs = 78;
  activeSessions = 23;
}
