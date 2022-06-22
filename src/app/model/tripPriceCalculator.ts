import { City } from './city';
import { TripOptions } from './tripOptions';
import { TripResult } from './tripResult';

export interface TripPriceCalculator {
  calculateTripPrice(
    origin: City,
    destination: City,
    options: TripOptions
  ): TripResult;
}
