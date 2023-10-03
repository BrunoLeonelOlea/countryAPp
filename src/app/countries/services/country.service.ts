import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private countriesUrlApi: string = "https://restcountries.com/v3.1";

    constructor(private httpClient: HttpClient) { }

    searchByAlphaCode(code: string ): Observable<Country | null>{
        let url = `${ this.countriesUrlApi}/alpha/${code}`;

        return this.httpClient.get<Country[]>( url)
        .pipe( 
            map( countries => countries.length > 0 ? countries[0]: null),
            catchError( () => of(null))
            );
    }
    

    searchCapital(term: string ) : Observable<Country[]> {

        let url = `${ this.countriesUrlApi}/capital/${term}`;

        return this.httpClient.get<Country[]>( url)
            .pipe( catchError( () => of([])));
    }

    searchCountry(term: string) : Observable<Country[]>{
        let url = `${ this.countriesUrlApi}/name/${term}`;

        return this.httpClient.get<Country[]>(url)
            .pipe( catchError( () => of([])));
    }

    searchRegion(region: string ): Observable<Country[]> {
        let url = `${this.countriesUrlApi}/region/${region}`

        return this.httpClient.get<Country[]>( url)
            .pipe( catchError( () => of([])));
    }
}