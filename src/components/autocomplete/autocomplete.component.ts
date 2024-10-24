import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {

    @Input() elements: Observable<any[]> = of([]);
    @Output() textChanged = new EventEmitter<string>();
    @Output() onFocus = new EventEmitter<string>();
    @Output() onMouseOutResults = new EventEmitter<void>();
    inputValue = '';

    setFocus(): void {
        this.onFocus.emit(this.inputValue);
    }

    valueChange(): void {
        this.textChanged.emit(this.inputValue);
    }

    mouseOutResults(): void {
        this.onMouseOutResults.emit();
    }

}
