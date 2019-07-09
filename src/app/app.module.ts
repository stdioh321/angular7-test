import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { UsersService } from "./users/users.service";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { BackendService } from "./backend.service";
import { ShowOnConsolePipe } from './show-on-console.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    SidebarComponent,
    UsersComponent,
    UserDetailComponent,
    ShowOnConsolePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
     HttpClientModule,

  FormsModule,
  ReactiveFormsModule
  // InMemoryWebApiModule.forRoot(BackendService)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
