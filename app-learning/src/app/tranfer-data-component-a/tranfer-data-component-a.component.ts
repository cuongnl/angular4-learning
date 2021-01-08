import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tranfer-data-component-a',
  templateUrl: './tranfer-data-component-a.component.html',
  styleUrls: ['./tranfer-data-component-a.component.css']
})
export class TranferDataComponentAComponent implements OnInit {

  @Input() listNameChild: String[];
  @Input() masterName: String;
  @Output() outputSubmited = new EventEmitter<boolean>();
  @Output() tranferInputData = new EventEmitter<String>();
  varBoolean: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  outputSubmit(){
    this.varBoolean = !this.varBoolean;
    this.outputSubmited.emit(this.varBoolean);
  }

  actionTranferInputData(param: String){
    this.tranferInputData.emit(param);
  }

}
