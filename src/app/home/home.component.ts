import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.aRoute.data.subscribe(data => {
      // console.log(data);
    });
  }
  goSidebar() {
    // console.log("goSidebar");
    // this.router.navigate([{ outlets: { sidebar: ['/products'] } }]);
    // this.router.navigate([{ outlets: { sidebar: ['products'] } }]);
  }
}
