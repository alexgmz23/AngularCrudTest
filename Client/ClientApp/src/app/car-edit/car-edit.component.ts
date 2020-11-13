import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
    selector: 'app-car-edit',
    templateUrl: './car-edit.component.html',
    styleUrls: ['./car-edit.component.css']
})

export class CarEditComponent implements OnInit {
    public carForm: FormGroup;
    private carId: number;

    constructor(private carService: CarService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.carId = +this.route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.carForm = this.formBuilder.group({
            id: new FormControl({value: 0, disabled: true}),
            brand: '',
            model: '',
            year: 0
        });

        this.carService.getCar(this.carId).subscribe(response => {
            this.carForm = this.formBuilder.group(response);
        });
    }

    submitCar(car: Car) {
        this.carService.updateCar(car).subscribe(result => {
        });

        this.carForm.reset();
        this.router.navigate(['cars'], { relativeTo: this.route.root });
    }
}