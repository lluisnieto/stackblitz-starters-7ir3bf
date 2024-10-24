import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { NamedAPIResource } from 'pokenode-ts';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {

    @Input() elements: Observable<NamedAPIResource[]> = of([]);
    @Output() textChanged = new EventEmitter<string>();
    @Output() onFocus = new EventEmitter<string>();
    @Output() onMouseOutResults = new EventEmitter<void>();
    @Output() onCancelClick = new EventEmitter<void>();
    @Output() onClickElement = new EventEmitter<string>();
    inputValue = '';
    labelVisible = false;

    setFocus(): void {
        this.onFocus.emit(this.inputValue);
        setTimeout(() => { this.labelVisible = true; }, 200);
    }

    removeFocus(): void {
        this.labelVisible = false;
    }

    valueChange(): void {
        this.textChanged.emit(this.inputValue);
    }

    mouseOutResults(): void {
        this.onMouseOutResults.emit();
    }

    cancelClick(): void {
        this.inputValue = '';
        this.labelVisible = false;
        this.onCancelClick.emit();
    }

    clickElement(url: string): void {
        this.inputValue = '';
        this.onClickElement.emit(url);
        this.onMouseOutResults.emit();
        this.labelVisible = false;
    }

}
