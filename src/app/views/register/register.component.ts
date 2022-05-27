import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcountService } from 'src/app/service/acount.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error = false
  email = ''
  password = ''
  username = ''

  constructor(private acount: AcountService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('currentAcount') != null) this.router.navigate(['/notepad'])
  }

  generateAcount(){
    if(this.email != '' && this.password != '' && this.username != ''){
      this.acount.createAcount(this.email, this.password, this.username)
      window.location.href = '/login'
    }
    else{
      this.error = true
    }
    setTimeout(()=>{ this.error = false }, 800)
  }

}
