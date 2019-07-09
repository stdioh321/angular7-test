import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
  constructor(
    private aRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.aRoute.params.subscribe(par => {
      console.log(par);
      this.product = par;
    });
    // this.aRoute.queryParams.subscribe(params => {
    //   console.log(this.router.getCurrentNavigation());
    // });
    this.aRoute.paramMap.pipe();
    console.log(window.history.state.product);

  }

}
