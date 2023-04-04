import { Component, Input} from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {

  @Input()
  indNote:any[] = [];
   
  }
