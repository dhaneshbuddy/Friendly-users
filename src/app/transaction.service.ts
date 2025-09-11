import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  //PTMR_Payment_Id: string;      // Transaction Id
  //METS_Machine_CreateBy:string;
  PTMR_Transaction_Id:string;
  MEMR_Machine_Id: string;      // Machine Id
  METS_Transaction_Value:string;
  //METS_Machine_CreateOn: string; // Transaction Value (date here)
  //METS_Machine_CreateBy?: string;
  //METS_Machine_Id?: string;
  //URMR_User_Id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://al3xlg8ob7.execute-api.ap-south-1.amazonaws.com/api/machine/?machineId=1';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
}