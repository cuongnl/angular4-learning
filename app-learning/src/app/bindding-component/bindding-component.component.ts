import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindding-component',
  templateUrl: './bindding-component.component.html',
  styleUrls: ['./bindding-component.component.css']
})
export class BinddingComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infoInterpolation = {
    name: "INTERPOLATION"
  }

  isBindding: String = "this is bindding";

  showInfo(){
    alert("event binding by function");
  }

}
