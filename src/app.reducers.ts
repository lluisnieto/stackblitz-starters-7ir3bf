import { Action, createReducer, on } from '@ngrx/store';

import { initialAppState } from './app.state';
import { setInitialDataSuccess, setSelectedPokemonSuccess } from './app.actions';

export const initialDataReducer = createReducer(
    initialAppState,
    on(setInitialDataSuccess, (state, value: any) => {
        return { ...state, namedResourcesList: value.payload };
    }),
    on(setSelectedPokemonSuccess, (state, value: any) => {
        return { ...state, selectedPokemon: value.payload};
    })
);

