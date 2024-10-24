import { createAction } from '@ngrx/store';

export enum ActionTypes{
  SET_INITIAL_DATA = '[Initial data] Add initial data',
  SET_INITIAL_DATA_SUCCESS = '[Initial data] Load success',
  SET_ERROR = '[Error] Exception thrown'
}

export const setInitialData = createAction(
  ActionTypes.SET_INITIAL_DATA
);

export const setInitialDataSuccess = createAction(
    ActionTypes.SET_INITIAL_DATA_SUCCESS
)
