import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
    selector: 'app-car-new',
    templateUrl: './car-new.component.html',
    styleUrls: ['./car-new.component.css']
})

export class CarNewComponent {
    public carForm: FormGroup;

    constructor(private carService: CarService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.carForm = this.formBuilder.group({
            brand: '',
            model: '',
            year: 0
        });
    }

    submitCar(car: Car) {
        this.carService.addCar(car).subscribe(result => {

        });

        this.carForm.reset();
        this.router.navigate(['cars'], { relativeTo: this.route.root });
    }
}