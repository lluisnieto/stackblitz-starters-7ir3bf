import { createAction, props } from '@ngrx/store';

export enum ActionTypes{
    SET_LOAD_ELEMENTS = '[Load elements] Load list elements page',
    SET_LOAD_ELEMENTS_SUCCESS = '[Load elements] Load list elements page success',
    SET_ERROR = '[Error] Exception thrown',
    SET_SELECTED_POKEMON = '[Selected pokemon] Load selected pokemon',
    SET_SELECTED_POKEMON_SUCCESS = '[Selected pokemon] Success',
    SET_LOAD_ELEMENTS_NEXT_PAGE = '[Load elements] Next page',
    SET_LOAD_ELEMENTS_NEXT_PAGE_SUCCESS = '[Load elements] Next page success',
}

export const setLoadElements = createAction(
    ActionTypes.SET_LOAD_ELEMENTS,
    props<LoadElementsPagePayload>()
);

export const setLoadElementsSuccess = createAction(
    ActionTypes.SET_LOAD_ELEMENTS_SUCCESS
);

export const setSelectedPokemon = createAction(
    ActionTypes.SET_SELECTED_POKEMON,
    props<SelectedPokemonPayload>()
);

export const setSelectedPokemonSuccess = createAction(
    ActionTypes.SET_SELECTED_POKEMON_SUCCESS
);

export const setLoadElementsNextPage = createAction(
    ActionTypes.SET_LOAD_ELEMENTS_NEXT_PAGE,
    props<LoadElementsNextPagePayload>()
);

export const setLoadElementsNextPageSuccess = createAction(
    ActionTypes.SET_LOAD_ELEMENTS_NEXT_PAGE_SUCCESS
);

export interface SelectedPokemonPayload {
    url: string
}

export interface LoadElementsPagePayload {
    itemsPerPage: number
}

export interface LoadElementsNextPagePayload {
    url: string
}