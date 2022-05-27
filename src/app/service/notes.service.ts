import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Notes[] = []


  constructor(private localmanager: LocalstorageService) { }

  createNote(acountId:string, message:string, title:string){
    var note = new Notes();
    note.title = title;
    note.message = message;
    note.acountId = acountId
    this.notes.push(note)
    this.localmanager.createNote(this.notes, acountId)
  }
}
