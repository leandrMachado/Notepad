import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acounts } from 'src/app/service/acounts';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { Notes } from 'src/app/service/notes';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  currentAcount: string = String(localStorage.getItem('currentAcount'))
  acountUser: string = ''
  getNotes: any = ''
  noteId: any = ''

  constructor(private localmanager: LocalstorageService  ,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('currentNote') != null) this.router.navigate(['/note'])
    this.acountUser = this.localmanager.getAcount(this.currentAcount).username
    this.getNotes = this.localmanager.getNotes(this.localmanager.getAcount(this.currentAcount).id)
  }

  openNote(noteId: string){
    this.localmanager.loadNote(noteId)
  }

  endSession(){
    this.localmanager.logOut();
    this.router.navigate(['/login']);
  }

}
