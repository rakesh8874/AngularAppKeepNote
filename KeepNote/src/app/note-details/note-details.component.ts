import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from '../service/note-service.service';
import { Note } from '../model/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteServiceService } from '../service/route-service.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit{


  notes:any = {};

  editStatus:boolean = false;

 constructor(private _snakBar:MatSnackBar, private noteService:NoteServiceService, 
  private activateRoute:ActivatedRoute, private routerService:RouteServiceService){}

  ngOnInit(): void {
      this.activateRoute.paramMap.subscribe(params=>{
        let id = params.get("id") ?? 0;

        this.noteService.getNote(+id).subscribe(data=>{
           this.notes = data;
        })
      })
    }
     editDetails(){
      this.noteService.editNotes(this.notes?.id, this.notes).subscribe(data=>{
        this.notes = data;
        this.routerService.navegateToHome();
      })
    }
    deleteNotes(){
      this.noteService.deleteNotes(this.notes?.id).subscribe(data=>{
        this._snakBar.open('Note has Been Deleted Successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.routerService.navegateToHome();
      })
    }
    canDeactivate(){
      if(!this.editStatus){
        return confirm("Changes Are Not Saved Do You Still Want to Leave?"); 
      }
      else{
      return true;
      }
    }
}
