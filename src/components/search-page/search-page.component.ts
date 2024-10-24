import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setInitialData } from '../../app.actions';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { getNamedResourcesSelector } from '../../app.selectors';
import { map, Observable, of } from 'rxjs';

@Component({
    selector: 'app-search-page',
    standalone: true,
    imports: [
        FormsModule,
        AutocompleteComponent
    ],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

    $pokemons: Observable<Array<any>> = of([]);

    constructor(private store: Store) {
        this.store.dispatch(setInitialData());
    }

    textChanged(event: string): void {

    }

    onFocus(event: any): void {
        if (!event.length)  {
            this.$pokemons = this.store.select(getNamedResourcesSelector).pipe(
                map((value: any) => {
                    return value.results;
                })
            )
        }
    }

    onMouseOutResults(): void {
        this.$pokemons = of([]);
    }
}
