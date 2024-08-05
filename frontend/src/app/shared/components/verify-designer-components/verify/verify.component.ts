import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  username: string;
  affiliated: string;
}

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  users: User[] = [];
  searchQuery: string = '';
  filteredUsers: User[] = [];
  hasResults: boolean = false;

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    // Initialize the users array with default values
    this.users = [
      { username: 'isabella_090', affiliated: 'Affiliated' },
      { username: 'john_doe', affiliated: 'Not Affiliated' },
      // Add more users as needed
    ];
  }

  searchUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.affiliated.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.hasResults = this.filteredUsers.length > 0;
  }
}
