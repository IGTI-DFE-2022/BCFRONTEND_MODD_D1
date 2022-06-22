import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';
import { BackendService } from '../services/backend.service';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss'],
})
export class PriceFormComponent implements OnInit {
  countries: string[] = [];
  cities: City[] = [];

  selectedOriginCountry = '';
  selectedDestinationCountry = '';

  constructor(
    private backendService: BackendService,
    private calculatorService: CalculatorService
  ) {}

  ngOnInit(): void {
    this.backendService.getCountries().subscribe((countries) => {
      this.countries = countries.map((c) => c.country);
    });
    this.backendService.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  getCityNames() {
    return this.cities.map((c) => c.name);
  }

  getCitiesFromCountry(country: string) {
    return this.cities.filter((c) => c.country === country);
  }

  getOriginCities() {
    return this.getCitiesFromCountry(this.selectedOriginCountry);
  }

  getDestinationCities() {
    return this.getCitiesFromCountry(this.selectedDestinationCountry);
  }

  getCityFromName(cityName: string) {
    console.log(`Trying to found city: ${cityName}`);
    return this.cities.find((c) => c.name === cityName);
  }

  calculatePrice(formData: any) {
    let originCity = this.getCityFromName(formData.value['origin-city']);
    let destinationCity = this.getCityFromName(
      formData.value['destination-city']
    );
    console.log(formData.value);
    if (!originCity || !destinationCity) {
      console.log('Cities not found');
      return;
    }

    let result = this.calculatorService.calculatePrice(
      originCity,
      destinationCity,
      {
        adults: formData.value['adults'],
        children: formData.value['children'],
        type: formData.value['type'],
        miles: formData.value['miles'],
      }
    );

    console.log(result);
  }
}
