import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranferDataService {

  private tranferDataServiceSource = new Subject<String>();

  constructor() { }

  tranferDataService$ = this.tranferDataServiceSource.asObservable();

  actionTranfer(param: String){
    this.tranferDataServiceSource.next(param);
  }
}
