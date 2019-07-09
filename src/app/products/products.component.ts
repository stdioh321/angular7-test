import { Component, OnInit } from '@angular/core';

import { Route, ActivatedRoute, Router, NavigationExtras } from "@angular/router";


import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { id: '1', name: "Prod1" },
    { id: '2', name: "Prod2" },
    { id: '3', name: "Prod3" },
    { id: '4', name: "Prod4" },
    { id: '5', name: "Prod5" }
  ];
  myForm: FormGroup;
  constructor(
    // private route: Route
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/\w{3,}/)
      ]))
    });
  }

  ngOnInit() {

  }
  goProductDetail(val) {
    // console.log(val);
    let nExtras: NavigationExtras = {
      state: {
        product: val
      }
    };
    this.router.navigate(['/product-detail', val.id], nExtras);
    // console.log(this.router.isActive('/products', false));
  }
  onSubmit(form) {
    console.log(form);
  }
}
