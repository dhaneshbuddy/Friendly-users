import { Component } from '@angular/core';

interface Kpi {
  title: string;
  value: string;
  subtext: string;
  up?: boolean; // true = green up, false = red down, undefined = neutral
  icon: string; // emoji or material icon text
  color: string; // circle badge color
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // ====== KPI CARDS (dummy) ======
  kpis: Kpi[] = [
    { title: 'Total Admin',         value: '₹24k',  subtext: '↑ 12%  Since last month', up: true,  icon: '₹', color: 'rgba(11, 73, 114, 1)' },
    { title: 'Total Users', value: '1.6k',  subtext: '↓ 16%  Since last month', up: false, icon: '👥', color: '#54d449ff' },
    { title: 'Total Machine',   value: '75.5%', subtext: '',                        up: undefined, icon: '📋', color: '#FFA000' },
    { title: 'Total Transaction',    value: '₹15k',  subtext: '',                        up: undefined, icon: '💬', color: 'rgba(11, 73, 114, 1)' },
  ];

  // ====== SALES (dummy monthly data) ======
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  monthlySales = [18, 15, 6, 3, 14, 14, 16, 18, 20, 19, 12, 13]; // in thousands
  maxSales = Math.max(...this.monthlySales);

  barHeight(val: number): string {
    // percentage of the tallest bar
    return `${(val / this.maxSales) * 100}%`;
  }

  // ====== TRAFFIC SOURCE (dummy) ======
  traffic = [
    { label: 'User_1',   value: 45, color: 'rgba(11, 73, 114, 1)' },
    { label: 'User_2', value: 25, color: '#FFA000' },
    { label: 'User_3',   value: 15, color: '#54d449ff' },
    { label: 'User_4',    value: 15, color: '#42A5F5' }
  ];
  get trafficTotal(): number {
    return this.traffic.reduce((s, x) => s + x.value, 0);
  }

  // SVG donut helpers
  // circumference for r=70 => 2 * PI * r
  readonly c = 2 * Math.PI * 70;

  dash(val: number): string {
    const pct = val / this.trafficTotal;
    return `${pct * this.c} ${this.c}`;
  }

  offset(idx: number): number {
    const before = this.traffic.slice(0, idx).reduce((s, x) => s + x.value, 0);
    return this.c * (before / this.trafficTotal) * -1; // negative to draw clockwise
  }
}