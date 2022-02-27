import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService} from '../../../services/users.service';
import {UsersData} from '../../../models/user-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userEmailSearch: null;
  userStatus: null;
  userData: Observable<UsersData>;
  status = ['active', 'inactive', 'all'];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userData = this.userService.getUsers();
  }

  searchBy(email?: string, status?: string): void {
    if (status === 'all') {
      return this.getUsers();
    }
    this.userData = this.userService.searchUserBy(email, status);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
