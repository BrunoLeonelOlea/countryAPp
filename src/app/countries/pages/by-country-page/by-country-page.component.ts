import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = []


  constructor(private countriesService: CountriesService){}

  public searchByCountry(country: string){

   this.countriesService.searchCountry(country).subscribe( countries => {
      this.countries = countries;
    }
   );

   console.log({country});
  }

}
