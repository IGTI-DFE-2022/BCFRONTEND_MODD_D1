import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';
import { BackendService } from '../services/backend.service';

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

  constructor(private backendService: BackendService) {}

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

  calculatePrice(formData: any) {
    console.log(formData.value);
  }
}
