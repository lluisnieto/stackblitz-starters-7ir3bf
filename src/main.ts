import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>PokeSelect</h1>
    <app-autocomplete></app-autocomplete>
  `,
  imports: [AutocompleteComponent],
})
export class App {

}

bootstrapApplication(App);
