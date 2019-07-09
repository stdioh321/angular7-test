import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from "../users.service";

import { fadeAnimation } from "../../route-animation";
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class UserDetailComponent implements OnInit {
  user = null;
  constructor(
    private uService: UsersService,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(window.history.state);
    this.getUser();
    // this.user = window.history.state.user;
  }
  getUser() {
    if (window.history.state.user) {
      this.user = window.history.state.user;
    } else {
      this.aRoute.params.subscribe(pars => {
        this.uService.getUserById(pars.id).subscribe(data => {
          this.user = data.body;
          // console.log(data);
        })
      });
    }
  }
  whenUserChange() {
    console.log(window);
    return window && window.location && window.location.href;
  }
}
