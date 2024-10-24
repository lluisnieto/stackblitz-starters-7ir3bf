import { createAction, props } from '@ngrx/store';

export enum ActionTypes{
    SET_INITIAL_DATA = '[Initial data] Add initial data',
    SET_INITIAL_DATA_SUCCESS = '[Initial data] Load success',
    SET_ERROR = '[Error] Exception thrown',
    SET_SELECTED_POKEMON = '[Selected pokemon] Load selected pokemon',
    SET_SELECTED_POKEMON_SUCCESS = '[Selected pokemon] Success'
}

export const setInitialData = createAction(
    ActionTypes.SET_INITIAL_DATA
);

export const setInitialDataSuccess = createAction(
    ActionTypes.SET_INITIAL_DATA_SUCCESS
);

export const setSelectedPokemon = createAction(
    ActionTypes.SET_SELECTED_POKEMON,
    props<SelectedPokemonPayload>()
);

export const setSelectedPokemonSuccess = createAction(
    ActionTypes.SET_SELECTED_POKEMON_SUCCESS
);

export interface SelectedPokemonPayload {
    url: string
}