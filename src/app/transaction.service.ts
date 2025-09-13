import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  PTMR_Transaction_Id: string;
  MEMR_Machine_Id: string;
  METS_Transaction_Value: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://al3xlg8ob7.execute-api.ap-south-1.amazonaws.com/api/machine';

  constructor(private http: HttpClient) {}

  // get transactions by machine id
  getTransactions(machineId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/?machineId=${machineId}`);
  }
}
