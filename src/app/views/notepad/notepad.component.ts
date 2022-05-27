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
  arrayNote: Notes[] = []

  constructor(private localmanager: LocalstorageService  ,private router: Router) { }

  ngOnInit(): void {
    this.acountUser = this.localmanager.getAcount(this.currentAcount).username
    console.log(this.localmanager.getNotes(this.localmanager.getAcount(this.currentAcount).id))

  }

  endSession(){
    this.localmanager.logOut();
    this.router.navigate(['/login']);
  }

}
