import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
    ActionTypes,
    LoadElementsNextPagePayload,
    LoadElementsPagePayload,
    SelectedPokemonPayload
} from './app.actions';
import { ApiProvider } from './providers/api.provider';
import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private apiProvider: ApiProvider
    ) {}

    loadPageResults$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SET_LOAD_ELEMENTS),
            switchMap((payload: LoadElementsPagePayload) => this.apiProvider.loadData(payload.itemsPerPage)
                .pipe(
                    map((list: NamedAPIResourceList) => ({ type: ActionTypes.SET_LOAD_ELEMENTS_SUCCESS, payload: list })),
                    catchError(() => of({ type: ActionTypes.SET_ERROR }))
                )
            )
        )
    );

    loadSelectedPokemon$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SET_SELECTED_POKEMON),
            switchMap((payload: SelectedPokemonPayload) => this.apiProvider.loadUrl(payload.url)
                .pipe(
                    map((pokemon: Pokemon) => ({ type: ActionTypes.SET_SELECTED_POKEMON_SUCCESS, payload: pokemon })),
                    catchError(() => of({ type: ActionTypes.SET_ERROR }))
                )
            )
        )
    );

    setLoadElementsNextPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SET_LOAD_ELEMENTS_NEXT_PAGE),
            switchMap((payload: LoadElementsNextPagePayload) => this.apiProvider.loadUrl(payload.url)
                .pipe(
                    map((list: NamedAPIResourceList) => ({ type: ActionTypes.SET_LOAD_ELEMENTS_NEXT_PAGE_SUCCESS, payload: list })),
                    catchError(() => of({ type: ActionTypes.SET_ERROR }))
                )
            )
        )
    );
}