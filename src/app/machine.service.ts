import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Machine {
  MEMR_Machine_No: string;
  MEMR_Machine_Name: string;
  MEMR_Machine_Category: string;
  MEMR_Machine_Discription: string;
  MEMR_Machine_Location: string;
}

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = 'https://al3xlg8ob7.execute-api.ap-south-1.amazonaws.com/api/machine/';

  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl);
  }
}
