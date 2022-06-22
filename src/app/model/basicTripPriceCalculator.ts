import { City } from './city';
import { getDistance } from './distanceCalculator';
import { TripOptions } from './tripOptions';
import { TripPriceCalculator } from './tripPriceCalculator';
import { TripResult } from './tripResult';

export class BasicTripPriceCalculator implements TripPriceCalculator {
  calculateTripPrice(
    origin: City,
    destination: City,
    options: TripOptions
  ): TripResult {
    let kmDistance = getDistance(origin, destination);
    let sameCountry = origin.country === destination.country;
    let adultPrice = sameCountry ? kmDistance * 0.3 : 0.5;
    let childPrice = sameCountry ? kmDistance * 0.15 : 0.25;

    if (options.type === 'executive') {
      adultPrice *= 1.8;
      childPrice *= 1.4;
    }

    let milesDiscount = 0;
    if (options.miles > 0) {
      milesDiscount = options.miles * 0.02;
    }
    let priceWithoutDiscount =
      adultPrice * options.adults + childPrice * options.children;
    return {
      adultUnitPrice: adultPrice,
      childUnitPrice: childPrice,
      priceWithoutDiscount,
      finalPrice: priceWithoutDiscount - milesDiscount,
      milesDiscount,
    };
  }
}
