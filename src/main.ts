import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-autocomplete></app-autocomplete>
  `,
  imports: [AutocompleteComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
