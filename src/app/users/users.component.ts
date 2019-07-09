import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { UsersService } from "./users.service";
import { Users } from "./Users.class";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<Users>;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.users);
    this.getUsers();
  }

  getUsers() {
    if (this.usersService.hasUsers()) {
      this.users = this.usersService.getLocalUsers();
    } else {
      this.usersService.getUsers().subscribe(data => {
        // console.log(data);
        this.users = <any>data.body;
        this.usersService.setLocalUsers(this.users);
      }, err => {
        console.log("Error: ", err);
      });
    }
  }
  userDetail(user) {
    // console.log(user);
    this.router.navigate(["users", user.id], { state: { user: user } })
  }
}


