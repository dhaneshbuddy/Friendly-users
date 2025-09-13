import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-manageuserlist',
  templateUrl: './manageuserlist.component.html',
  styleUrls: ['./manageuserlist.component.css']
})
export class ManageuserlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'customerName', 'email', 'role', 'actions'];
  users: User[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.authService.getUsers();
  }

  // Optional: Delete user
  deleteUser(index: number) {
    if (confirm(`Are you sure you want to delete ${this.users[index].customerName}?`)) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users)); // Update localStorage
      this.loadUsers();
    }
  }
}
