import { Injectable } from '@angular/core';
import { Acounts } from './acounts';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AcountService {
  // servico de criar contas
  constructor(private localmanager:LocalstorageService) { }

  storageAcounts = localStorage
  acounts: Acounts[] = []
  verifiedAccount = false

  createAcount(email:string, pass:string, user:string){
    var acount = new Acounts()
    acount.username = user
    acount.email = email;
    acount.passw = pass;
    this.acounts.push(acount)
    this.localmanager.createAcount(this.acounts)
  }  
}
