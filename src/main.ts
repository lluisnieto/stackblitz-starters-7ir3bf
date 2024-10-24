import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { Store } from '@ngrx/store';
import { setInitialData } from './app.actions';
import { appConfig } from './app.config';
import { ApiProvider } from './providers/api.provider';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <h1>PokeSelect</h1>
        <app-autocomplete></app-autocomplete>
    `,
    imports: [AutocompleteComponent],
    providers: [
        ApiProvider
    ]
})
export class App {
    constructor(private store: Store) {
        setTimeout(() => {
            this.store.dispatch(setInitialData());
        }, 2000);
    }
}

bootstrapApplication(App, appConfig);
