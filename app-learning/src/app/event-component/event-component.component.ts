import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  constructor() { }

  counter: number;
  label: String = "demo";
  labelValue: String ="demoValue";
  labelValue2way: String = "1";
  ngOnInit(): void {
    this.counter = 1;
  }

  increment(){
    this.counter++;
  }

  changeByParam(event: Event){
    this.label = (<HTMLInputElement>event.target).value;
  }

  changeByParamValue(value: any){
    this.labelValue = value;
  }


}
