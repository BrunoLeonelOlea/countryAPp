import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries : Country[] = []
  public initialValue: string = '';


  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  public searchByCountry(country: string){

   this.countriesService.searchCountry(country).subscribe( countries => {
      this.countries = countries;
    }
   );

   console.log({country});
  }

}
