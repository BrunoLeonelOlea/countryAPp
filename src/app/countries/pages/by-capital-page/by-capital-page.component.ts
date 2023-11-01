import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countryService: CountriesService){}
  

  searchByCapital(term: string):void {
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe( countries => {

      this.countries = countries;
      this.isLoading = false;
    });

  }

}
