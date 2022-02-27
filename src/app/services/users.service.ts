import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersData} from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`https://gorest.co.in/public/v2/users`);
  }

  searchUserBy(email?, status?) {
    if (email == null) {
      return this.http.get(`https://gorest.co.in/public/v2/users?status=${status}`);
    } else if (status == null) {
      return this.http.get(`https://gorest.co.in/public/v2/users?email=${email}`);
    } else {
      return this.http.get(`https://gorest.co.in/public/v2/users?email=${email}&status=${status}`);
    }
  }
}
