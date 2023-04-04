import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Note } from '../model/note';
import { NoteServiceService } from '../service/note-service.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit{

  @Output()
  noteAdded = new EventEmitter();

  notes:Note = {};
  
  constructor(private noteService:NoteServiceService, private _snakBar:MatSnackBar){}

  ngOnInit(): void {
  }

  addNote(data:any){
    if(this.notes?.title){
      this.noteService.save(this.notes).subscribe({
        next:data =>{
          this.noteAdded.emit(data);
          this.notes = {};
        },
        error:e=>{
          alert("Some Network Error Occur Try it Later");
        }
      })
    }
    this._snakBar.open('Note Added Successfully', 'success',{
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
     })
  }
}
