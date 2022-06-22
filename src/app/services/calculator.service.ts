import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BasicTripPriceCalculator } from '../model/basicTripPriceCalculator';
import { City } from '../model/city';
import { TripOptions } from '../model/tripOptions';
import { TripPriceCalculator } from '../model/tripPriceCalculator';
import { TripResult } from '../model/tripResult';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  lastResult = new BehaviorSubject<TripResult | null>(null);

  constructor() {}

  calculatePrice(
    originCity: City,
    destinationCity: City,
    options: TripOptions
  ) {
    let calculator: TripPriceCalculator = new BasicTripPriceCalculator();
    let price = calculator.calculateTripPrice(
      originCity,
      destinationCity,
      options
    );
    this.lastResult.next(price);
    return price;
  }

  watchResult() {
    return this.lastResult.asObservable();
  }
}
