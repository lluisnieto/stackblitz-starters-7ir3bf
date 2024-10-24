import { createReducer, on } from '@ngrx/store';

import { initialAppState } from './app.state';
import { setLoadElementsNextPageSuccess, setLoadElementsSuccess, setSelectedPokemonSuccess } from './app.actions';

export const pokemonReducer = createReducer(
    initialAppState,
    on(setLoadElementsSuccess, (state, value: any) => {
        return { ...state, namedResourcesList: value.payload };
    }),
    on(setSelectedPokemonSuccess, (state, value: any) => {
        return { ...state, selectedPokemon: value.payload};
    }),
    on(setLoadElementsNextPageSuccess, (state: any, value: any) => {
        if (state) {
            return {
                ...state,
                namedResourcesList: {
                    ...state.namedResourcesList,
                    results: [...state.namedResourcesList.results, ...value.payload.results],
                    next: value.payload.next
                }
            };
        }
    })
);

