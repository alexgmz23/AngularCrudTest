import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})

export class CarsComponent {
  public cars: Car[];

  constructor(private carService: CarService) {
    this.carService.getCars().subscribe(result => {
        this.cars = result;
      }, error => console.error(error));
  }
}
