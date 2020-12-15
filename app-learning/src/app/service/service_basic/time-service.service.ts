import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor() { }

  getTime(){
    return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
  }
}
