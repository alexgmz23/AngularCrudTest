import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from '../car.service';
import { Car } from '../car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})

export class CarDeleteComponent implements OnInit {
  private carId: number;
  public car: Car;

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) {
    this.carId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.carService.getCar(this.carId).subscribe(response => {
      this.car = response;
    });
  }

  deleteCar(carId: number) {
    this.carService.deleteCar(carId).subscribe(result => {
    });

    this.router.navigate(['cars'], { relativeTo: this.route.root });
  }
}
