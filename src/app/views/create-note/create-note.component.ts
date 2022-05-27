import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  currentAcount: string = String(localStorage.getItem('currentAcount'))
  acountId: string = ''
  title =''
  message = ''

  constructor(private localmanager: LocalstorageService, private note:NotesService) { }

  ngOnInit(): void {
    this.acountId = this.localmanager.getAcount(this.currentAcount).id
  }

  saveNote(){
    this.note.createNote(this.acountId, this.title, this.message)
  }

}
