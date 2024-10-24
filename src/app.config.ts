import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { FeatureKey } from './app.selectors';
import { pokemonReducer } from './app.reducers';
import { AppEffects } from './app.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideStore({ router: routerReducer }),
        provideState({ name: FeatureKey, reducer: pokemonReducer }),
        provideAnimationsAsync(),
        provideEffects(AppEffects),
        provideRouterStore(),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
};
