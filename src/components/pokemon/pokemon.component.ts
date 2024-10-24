import { AfterViewInit, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { NamedAPIResource, Pokemon } from 'pokenode-ts';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pokemon',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

    @Input() pokemon$: Observable<Pokemon> = of();
}