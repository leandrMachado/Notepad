import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Notes {
  id: number = 0
  acountId: string = ''
  title:string = ''
  message:string = ''
}