import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypes } from './app.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiProvider } from './providers/api.provider';
import { of } from 'rxjs';

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
}