import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranfer-data-between-component',
  templateUrl: './tranfer-data-between-component.component.html',
  styleUrls: ['./tranfer-data-between-component.component.css']
})
export class TranferDataBetweenComponentComponent implements OnInit {

  constructor() { }

  listName : String[] = ["name_1", "name_2", "name_3"];
  masterName: String = "master_name";

  dataBooleanFromChild: boolean;
  dataInputFromChild: String;

  ngOnInit(): void {
  }

  outputSubmitParrent(param : boolean){
    this.dataBooleanFromChild = param;
  }

  outputSubmitParrentInput(param: String){
    this.dataInputFromChild = param;
  }

}
