import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './app.state';

export const FeatureKey = 'APP';
export const selectState = createFeatureSelector<State>(FeatureKey);
export const getNamedResourcesSelector = createSelector(selectState, (state) => state.namedResourcesList);
export const getSelectedPokemon = createSelector(selectState, (state) => state.selectedPokemon);
