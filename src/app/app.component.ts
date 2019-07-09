import { Component } from '@angular/core';

import { Router } from "@angular/router";

import { fadeAnimation } from "./route-animation";

// import { fader } from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,animations: [fadeAnimation]

})
export class AppComponent {
  title = 'angulartest';
  constructor(
    private router: Router
  ) {

  }
  prepareRoute(outlet) {
    // console.log(window);
    // let loc = outlet.activated && outlet.activated.location;
    // console.log(outlet.activated && outlet.activated.location );
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return window && window.location && window.location.href;
  }
}
