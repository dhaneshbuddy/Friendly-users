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
          this.machines = data;
        } else if (data.Items && Array.isArray(data.Items)) {
          this.machines = data.Items;
        } else if (data.body) {
          this.machines = JSON.parse(data.body);
        } else {
          this.machines = [data];
        }

        // ✅ Sort machines by Machine_Id (ascending)
        this.machines.sort((a, b) =>
          a.MEMR_Machine_Id.localeCompare(b.MEMR_Machine_Id)
        );

        console.log("Machines after sort:", this.machines);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load machines';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
