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

  isBindding: String = "this is bindding";

}
