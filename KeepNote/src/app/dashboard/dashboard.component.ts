import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../service/note-service.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noteService: NoteServiceService) { }

  notes: Note[] = [];

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe({
      next: noteData => {
        this.notes = noteData;
      },
      error: e => {
        alert("Faild To Fetch data may be network error");
      }
    })
  }
  addNote(data: Note) {
    this.notes.push(data);
  }

  searchOnText(noteTitle: string) {
    this.noteService.getAllNotes().subscribe({
      next: note => {
        if (noteTitle == null || noteTitle !== "") {
          this.notes = note.filter(note1 => note1.title?.toLowerCase().includes(noteTitle.toLowerCase()));
        } else {
          this.notes = note;
        }
      },
      error: e => {
        alert("There is some Network Error Try It Later");
      }
    })
  }
}
