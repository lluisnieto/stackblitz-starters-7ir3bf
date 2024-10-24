import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiProvider {

    constructor(private httpClient: HttpClient){}

    loadInitialData(count: number): Observable<any> {
        return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?&limit=${count}`);
    }
}