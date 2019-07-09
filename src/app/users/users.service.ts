import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Users } from "./Users.class";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _urlUsers = "http://jsonplaceholder.typicode.com/users";

  private _users: [] = null;
  constructor(
    private _http: HttpClient
  ) { }

  getUsers() {
    return this._http.get(this._urlUsers, { observe: 'response' });
  }
  getUserById(id) {
    return this._http.get(this._urlUsers + "/" + id, { observe: 'response' });
  }

  getLocalUsers() {
    return this._users;
  }
  setLocalUsers(users) {
    this._users = users;
  }
  hasUsers(): boolean{
    return !!this._users;
  }
}
