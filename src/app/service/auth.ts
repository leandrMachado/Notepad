import { Injectable } from '@angular/core';
import { Acounts } from './acounts';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})

export class authorization {
  // servico de verificar contas 
  
  acounts: Acounts[] = JSON.parse(localStorage.getItem("acounts") ?? "[]")
  authorization = true

  constructor(private localmanager:LocalstorageService) {}

  auth(emailData: string, passData: string){
    for(let i = 0; i < this.acounts.length; i++){
      if(this.acounts[i].email === emailData && this.acounts[i].passw === passData){
        this.localmanager.loadAcount(this.acounts[i].email)
      }
      else { this.authorization = false }
    }

    return this.authorization
  }

}