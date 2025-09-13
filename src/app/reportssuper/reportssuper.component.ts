import { Component, OnInit } from '@angular/core';
import { MachineService, Machine } from '../machine.service';

@Component({
  selector: 'app-reportssuper',
  templateUrl: './reportssuper.component.html',
  styleUrls: ['./reportssuper.component.css']
})
export class ReportssuperComponent implements OnInit {
  machines: Machine[] = [];
  loading: boolean = true;       // ✅ add loading flag
  error: string | null = null;   // ✅ add error message

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.loadMachines();
  }

  // Load machines from API and sort by ID
  loadMachines() {
    this.loading = true;
    this.error = null;
    this.machineService.getMachines().subscribe({
      next: (data: Machine[]) => {
        this.machines = data.sort((a, b) => a.MEMR_Machine_Id.localeCompare(b.MEMR_Machine_Id));
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load machine list';
        this.loading = false;
      }
    });
  }

  // Add this method inside ReportsComponent
downloadCSV() {
  if (!this.machines || this.machines.length === 0) return;

  // Prepare CSV headers
  const headers = ['Machine Id', 'Machine No', 'Machine Name', 'Category', 'Description', 'Location'];
  
  // Prepare CSV rows
  const rows = this.machines.map(m => [
    m.MEMR_Machine_Id,
    m.MEMR_Machine_No,
    m.MEMR_Machine_Name,
    m.MEMR_Machune_Category,   // make sure spelling matches your API
    m.MEMR_Machine_Discription,
    m.MEMR_Machine_Location
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...rows]
    .map(e => e.map(a => `"${a}"`).join(','))  // quote each cell
    .join('\n');

  // Create a blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'machines_report.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
