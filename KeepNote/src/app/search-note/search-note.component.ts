import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.css']
})
export class SearchNoteComponent {

  @Output()
  eventProperty: EventEmitter<string> = new EventEmitter<string>();

  noteName: string = "";

  searchNote() {
    this.eventProperty.emit(this.noteName);
  }
}
