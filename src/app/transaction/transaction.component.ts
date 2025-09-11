import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];  // API data
  loading: boolean = true;           // Loading state
  error: string = '';                // Error message

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        console.log("API Response:", data);
        this.transactions = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.error = 'Failed to load transactions';
        this.loading = false;
      }
    });
  }
}
