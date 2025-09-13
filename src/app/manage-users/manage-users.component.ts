import { Component, OnInit } from '@angular/core';
import { MachineService, Machine } from '../machine.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  machines: Machine[] = [];
  loading: boolean = true;
  error: string | null = null;

  reloadEnabled: boolean = false;
  addingMachine: boolean = false;
  newMachine: Machine = this.emptyMachine();

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.loadMachines();
  }

  loadMachines() {
    this.loading = true;
    this.machineService.getMachines().subscribe({
      next: (data: Machine[]) => {
        this.machines = data.sort((a, b) =>
          a.MEMR_Machine_Id.localeCompare(b.MEMR_Machine_Id)
        );
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load machine list';
        this.loading = false;
      }
    });
  }

  deleteMachine(machineId: string) {
    this.machineService.deleteMachine(machineId).subscribe({
      next: () => {
        this.reloadEnabled = false;
        setTimeout(() => (this.reloadEnabled = true), 5000);
        this.loadMachines();
      },
      error: () => alert('Failed to delete machine')
    });
  }

  reloadMachines() {
    this.loadMachines();
    this.reloadEnabled = false;
  }

  emptyMachine(): Machine {
    return {
      MEMR_Machine_Id: '',
      MEMR_Machine_No: '',
      MEMR_Machine_Name: '',
      MEMR_Machune_Category: '',
      MEMR_Machine_Discription: '',
      MEMR_Machine_Location: ''
    };
  }

  startAdd() {
    this.addingMachine = true;
    this.newMachine = this.emptyMachine();
  }

  cancelAdd() {
    this.addingMachine = false;
  }

  saveMachine() {
    this.machineService.addMachine(this.newMachine).subscribe({
      next: () => {
        alert('Machine added successfully!');
        this.machines.push(this.newMachine);
        this.machines.sort((a, b) =>
          a.MEMR_Machine_Id.localeCompare(b.MEMR_Machine_Id)
        );
        this.addingMachine = false;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add machine.');
      }
    });
  }
}
