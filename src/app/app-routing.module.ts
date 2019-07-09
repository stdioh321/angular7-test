import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: "abc", component: HomeComponent }
    ],
    data: {
      title: "My Home",
      animation: 'Home'
    },

  },
  { path: 'users', component: UsersComponent, data: { animation: 'isRight' } },
  { path: 'users/:id', component: UserDetailComponent, data: { animation: 'isLeft' } },
  { path: 'products', component: ProductsComponent, data: { animation: 'isRight' } },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'sidebar', component: SidebarComponent, outlet: "sidebar" },
  { path: 'prod', component: ProductsComponent, outlet: "sidebar" },

  { path: '', redirectTo: 'home', pathMatch: "full" }
  , { path: '**', redirectTo: 'home', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
