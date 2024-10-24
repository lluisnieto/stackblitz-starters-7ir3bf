import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { filter, map } from 'rxjs/operators';

import { setInitialData, setSelectedPokemon, } from '../../app.actions';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { getNamedResourcesSelector, getSelectedPokemon } from '../../app.selectors';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
    selector: 'app-search-page',
    standalone: true,
    imports: [
        FormsModule,
        AutocompleteComponent,
        PokemonComponent
    ],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.scss'
})
export class SearchPageComponent implements AfterViewInit {

    pokemons$: Observable<Array<NamedAPIResource>> = this.emptyElements();
    elements$: Observable<Array<NamedAPIResource>> = this.emptyElements();
    pokemon$: Observable<Pokemon> = of();

    constructor(private store: Store) {
        this.store.dispatch(setInitialData());
    }

    ngAfterViewInit(): void {
        this.pokemons$ = this.store.select(getNamedResourcesSelector).pipe(
            filter(x => x != null),
            map((value: NamedAPIResourceList) => {
                return value.results;
            })
        );
        this.pokemon$ = this.store.select(getSelectedPokemon).pipe(
            filter(x => x != null)
        )
    }

    textChanged(searchText: string): void {
        this.elements$ = this.pokemons$.pipe(
            map((elements: Array<NamedAPIResource>) => {
                return elements.filter((element: NamedAPIResource) => {
                    return element.name.toLowerCase().includes(searchText);
                });
            })
        );
    }

    onFocus(searchText: string): void {
        if (!searchText.length)  {
            this.elements$ = this.pokemons$
        }
    }

    onMouseOutResults(): void {
        this.elements$ = this.emptyElements();
    }

    onCancelClick(): void {
        this.elements$ = this.emptyElements();
    }

    onClickElement(url: string): void {
        this.store.dispatch(setSelectedPokemon({ url }))
    }

    private emptyElements(): Observable<Array<NamedAPIResource>> {
        return of([]);
    }
}
