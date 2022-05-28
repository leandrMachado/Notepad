import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Acounts } from './acounts';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  // geriri localstorage
  acounts: Acounts[] = JSON.parse(localStorage.getItem("acounts") ?? "[]")
  notes: Notes[] = JSON.parse(localStorage.getItem('notes') ?? "[]")

  constructor(private router:Router) { }

  // users
  createAcount(acount:any){
    var newAcounts = new Acounts();

    for(let i = 0; i < acount.length; i++){
      newAcounts.id = this.acounts.length
      newAcounts.username = acount[i].username
      newAcounts.email = acount[i].email
      newAcounts.passw = acount[i].passw
    }

    this.acounts.push(newAcounts)
    localStorage.setItem('acounts', JSON.stringify(this.acounts))
  }

  loadAcount(acountMail: string){
    for(let i = 0; i < this.acounts.length; i++){
      if(this.acounts[i].email == acountMail){ localStorage.setItem('currentAcount', String(this.acounts[i].id)) }
    }
    this.router.navigate(['/notepad'])
  }

  getAcount(acountId: string){
    var returnAcount: any = ''
    for(let i = 0; i < this.acounts.length; i++){
      if(this.acounts[i].id === Number(acountId)) returnAcount = this.acounts[i]
    }
    return returnAcount
  }

  logOut(){
    localStorage.removeItem('currentAcount')
    this.router.navigate(['/login'])
  }

  // notes
  createNote(notes: any, acountId:string){
    var newNote = new Notes();

    for(let i = 0; i < notes.length; i++){
      newNote.id = this.notes.length
      newNote.title = notes[i].title
      newNote.message = notes[i].message
      newNote.acountId = notes[i].acountId
    }

    this.notes.push(newNote)
    localStorage.setItem('notes', JSON.stringify(this.notes))
    this.router.navigate(['/notepad'])
  }
  
  getNotes(acountId: string){
    var returnNotes: string[] = []
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].acountId === acountId) {
        var note: any = this.notes[i]
        returnNotes.push(note)
      }
    }
    return  returnNotes
  }

  getNote(noteId: string){
    var returnNote: string[] = []
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == Number(noteId)) {
        var note: any = this.notes[i]
        returnNote.push(note)
      }
    }

    return returnNote
  }

  loadNote(noteId: string){
    localStorage.setItem('currentNote', noteId)
    location.href = '/note'
  }

  logOutNote(){
    localStorage.removeItem('currentNote')
    this.router.navigate(['/notepad'])
  }

}
