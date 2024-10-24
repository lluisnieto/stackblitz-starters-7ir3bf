import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { SearchPageComponent } from './components/search-page/search-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<app-search-page></app-search-page>`,
    imports: [SearchPageComponent]
})
export class App {}

bootstrapApplication(App, appConfig);
