import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    console.log('Service works');
  }

  getCars() {
    return this.httpClient.get<Car[]>(this.baseUrl + 'api/car');
  }

  getCar(carId: number) {
    return this.httpClient.get<Car>(this.baseUrl + 'api/car/' + carId.toString());
  }

  addCar(car: Car) {
    car.year = +car.year;
    return this.httpClient.post<Car>(this.baseUrl + 'api/car', JSON.stringify(car), { headers: new HttpHeaders({
      'Content-Type': 'application/json'})
    });
  }

  updateCar(car: Car) {
    car.year = +car.year;
    return this.httpClient.put<Car>(this.baseUrl + 'api/car', JSON.stringify(car), { headers: new HttpHeaders({
      'Content-Type': 'application/json'})
    });
  }

  deleteCar(carId: number) {
    return this.httpClient.delete<number>(this.baseUrl + 'api/car/' + carId.toString());
  }
}
