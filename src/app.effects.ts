import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ActionTypes, SelectedPokemonPayload } from './app.actions';
import { ApiProvider } from './providers/api.provider';
import { Pokemon } from 'pokenode-ts';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private apiProvider: ApiProvider
    ) {}

    loadInitialData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SET_INITIAL_DATA),
            switchMap(() => this.apiProvider.loadInitialData(151)
                .pipe(
                    map(list => ({ type: ActionTypes.SET_INITIAL_DATA_SUCCESS, payload: list })),
                    catchError(() => of({ type: ActionTypes.SET_ERROR }))
                )
            )
        )
    );

    loadSelectedPokemon$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SET_SELECTED_POKEMON),
            switchMap((payload: SelectedPokemonPayload) => this.apiProvider.loadSelectedElement(payload.url)
                .pipe(
                    map((pokemon: Pokemon) => ({ type: ActionTypes.SET_SELECTED_POKEMON_SUCCESS, payload: pokemon })),
                    catchError(() => of({ type: ActionTypes.SET_ERROR }))
                )
            )
        )
    );
}