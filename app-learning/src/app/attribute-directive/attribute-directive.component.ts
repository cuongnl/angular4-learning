import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  classExpr = "my-class-1 my-class-2 my-class-3";

  styleExpr = 'width: 200px; height:200px; border: 1px solid red;';

}
