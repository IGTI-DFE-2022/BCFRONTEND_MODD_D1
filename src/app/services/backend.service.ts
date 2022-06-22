import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  readonly URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<CountryApiResponse[]>(this.URL + '/countries').pipe(
      map((data) => {
        return data.map((d) => {
          return { country: d.country };
        });
      })
    );
  }

  getCities() {
    return this.http.get<CountryApiResponse[]>(this.URL + '/countries').pipe(
      map((data) => {
        let cities: City[] = [];

        for (let country of data) {
          for (let city of country.cities) {
            cities.push({
              country: country.country,
              name: city.city,
              latitude: city.latitude,
              longitude: city.longitude,
            });
          }
        }

        return cities;
      })
    );
  }
}

type CountryApiResponse = {
  country: string;
  cities: { city: string; latitude: number; longitude: number }[];
};
