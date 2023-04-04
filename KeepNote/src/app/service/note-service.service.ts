import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  URL = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }

  save(noteDetails: Note) {
    return this.http.post<Note>(this.URL, noteDetails);
  }

  getNote(id?: number): Observable<Note> {
    return this.http.get<Note>(`${this.URL}/${id}`);
  }

  editNotes(id?: number, note?: Note) {
    return this.http.put<Note>(`${this.URL}/${id}`, note);
  }

  deleteNotes(id?: number): Observable<Note> {
    return this.http.delete<Note>(`${this.URL}/${id}`);
  }

}
