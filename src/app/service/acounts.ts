import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Acounts {
  // contas base
  id: number = 0
  username:string = ''
  email:string = ''
  passw:string = ''
}