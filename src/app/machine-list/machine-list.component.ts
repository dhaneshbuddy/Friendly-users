import { Component, OnInit } from '@angular/core';
import { MachineService, Machine } from '../machine.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {
  machines: Machine[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.machineService.getMachines().subscribe({
      next: (data: any) => {
        console.log("API Response:", data);

        if (Array.isArray(data)) {
          // ✅ direct array
          this.machines = data;
        } else if (data.Items && Array.isArray(data.Items)) {
          // ✅ inside Items
          this.machines = data.Items;
        } else if (data.body) {
          // ✅ body string → parse
          this.machines = JSON.parse(data.body);
        } else {
          // fallback
          this.machines = [data];
        }

        console.log("Machines after parse:", this.machines);
        this.loading = false;
      }
    });
  }
}
