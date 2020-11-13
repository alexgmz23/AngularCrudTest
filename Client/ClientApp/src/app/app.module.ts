import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarNewComponent } from './car-new/car-new.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { CarCancelComponent } from './car-cancel/car-cancel.component';

import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CarsComponent,
    CarNewComponent,
    CarEditComponent,
    CarDeleteComponent,
    CarCancelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cars', component: CarsComponent },
      { path: 'car-new', component: CarNewComponent },
      { path: 'car-edit/:id', component: CarEditComponent },
      { path: 'car-delete/:id', component: CarDeleteComponent }
    ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
