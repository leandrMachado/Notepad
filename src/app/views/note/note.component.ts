import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  currentNote: string = String(localStorage.getItem('currentNote'))
  getNote: any = ''
  title: string = ''
  message: string = ''

  constructor(private localmanager: LocalstorageService) { }

  ngOnInit(): void {
    this.getNote = this.localmanager.getNote(this.currentNote)
    this.title = this.getNote[0].message
    this.message = this.getNote[0].title
  }

  endNote(){
    this.localmanager.logOutNote()
  }

}
