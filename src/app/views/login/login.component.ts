import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authorization } from 'src/app/service/auth';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageError = ''
  email = ''
  password = ''

  constructor(private auth:authorization, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('currentAcount') != null) this.router.navigate(['/notepad'])
  }

  lgguer(){
    if(this.password != '' && this.email != ''){
      if(this.auth.auth(this.email, this.password) != true){
        this.messageError = 'Error: cant find an account'
      }
    }
    else { this.messageError = 'Error: invalid email or password' }
    setInterval(()=>{ this.messageError = '' }, 900)
  }
}
