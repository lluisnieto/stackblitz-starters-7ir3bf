import { createReducer, on } from '@ngrx/store';

import { initialAppState } from './app.state';
import { setInitialDataSuccess } from './app.actions';

export const initialDataReducer = createReducer(
    initialAppState,
    on(setInitialDataSuccess, (state, value: any) => {
        const newState = { ...state, namedResourcesList: value.payload };
        return newState;
    })
);

