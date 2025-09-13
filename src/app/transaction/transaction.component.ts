import { Component, OnInit } from '@angular/core';
import { Machine, MachineService } from '../machine.service';
import { Transaction, TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  machines: Machine[] = [];                // Dropdown ku
  transactions: Transaction[] = [];        // Selected machine transactions
  selectedMachine: string = '';            // Dropdown value

  constructor(
    private machineService: MachineService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    // Load all machines for dropdown
    this.machineService.getMachines().subscribe(data => {
      this.machines = data;

      // ✅ Sort by Machine_Id ascending
      this.machines.sort((a, b) =>
        a.MEMR_Machine_Id.localeCompare(b.MEMR_Machine_Id)
      );
    });
  }

  // When user selects a machine
  onMachineChange(): void {
    if (this.selectedMachine) {
      this.transactionService.getTransactions(this.selectedMachine).subscribe({
        next: (data) => {
          this.transactions = data;
        },
        error: (err) => {
          console.error('Failed to load transactions', err);
          this.transactions = [];
        }
      });
    }
  }
}
