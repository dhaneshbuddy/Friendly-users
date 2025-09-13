import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface Kpi {
  title: string;
  value: string;
  subtext: string;
  up?: boolean;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  // ====== KPI CARDS ======
  kpis: Kpi[] = [];

  // ====== SALES ======
  months: string[] = [];
  monthlySales: number[] = [];
  maxSales!: number;

  // ====== TRAFFIC ======
  traffic: { label: string, value: number, color: string }[] = [];
  readonly c = 2 * Math.PI * 70;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadData(); // initial load

    // Reload data if same route is hit
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadData();
      }
    });
  }

  loadData() {
    // ====== Dummy KPI data ======
    this.kpis = [
      { title: 'Total Admin', value: '₹24k', subtext: '↑ 12%  Since last month', up: true, icon: '₹', color: 'rgba(11, 73, 114, 1)' },
      { title: 'Total Users', value: '1.6k', subtext: '↓ 16%  Since last month', up: false, icon: '👥', color: '#54d449ff' },
      { title: 'Total Machine', value: '75.5%', subtext: '', up: undefined, icon: '📋', color: '#FFA000' },
      { title: 'Total Transaction', value: '₹15k', subtext: '', up: undefined, icon: '💬', color: 'rgba(11, 73, 114, 1)' },
    ];

    // ====== Dummy Sales ======
    this.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    this.monthlySales = [18, 15, 6, 3, 14, 14, 16, 18, 20, 19, 12, 13];
    this.maxSales = Math.max(...this.monthlySales);

    // ====== Dummy Traffic ======
    this.traffic = [
      { label: 'User_1', value: 45, color: 'rgba(11, 73, 114, 1)' },
      { label: 'User_2', value: 25, color: '#FFA000' },
      { label: 'User_3', value: 15, color: '#54d449ff' },
      { label: 'User_4', value: 15, color: '#42A5F5' }
    ];
  }

  // ====== Helper methods ======
  barHeight(val: number): string {
    return `${(val / this.maxSales) * 100}%`;
  }

  get trafficTotal(): number {
    return this.traffic.reduce((s, x) => s + x.value, 0);
  }

  dash(val: number): string {
    const pct = val / this.trafficTotal;
    return `${pct * this.c} ${this.c}`;
  }

  offset(idx: number): number {
    const before = this.traffic.slice(0, idx).reduce((s, x) => s + x.value, 0);
    return this.c * (before / this.trafficTotal) * -1;
  }
}
