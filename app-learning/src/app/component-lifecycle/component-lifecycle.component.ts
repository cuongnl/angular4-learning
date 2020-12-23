import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  placeholder: String;
  listLifecycle: String[] = [];
  constructor() { 
    this.listLifecycle.push("constructure 1");
  }

  ngOnInit(): void {
    this.placeholder = "ngOnInit Parent"
    this.listLifecycle.push(this.placeholder);
  }

  onSubmit(): void{
    this.placeholder+="1";
    this.listLifecycle.push("event submit");
  }

  ngDoCheck(): void {
    this.listLifecycle.push(`ngDoCheck: parent component : ${this.placeholder}`);
  }
  
  ngAfterContentInit(): void {
    this.listLifecycle.push(`ngAfterContentInit: parent component : ${this.placeholder}`);
  }

  ngAfterContentChecked(): void {
    this.listLifecycle.push(`ngAfterContentChecked: parent component : ${this.placeholder}`);
  }

  ngAfterViewInit(): void {
    this.listLifecycle.push(`ngAfterViewInit: parent component : ${this.placeholder}`);
  }

  ngAfterViewChecked(): void {
    this.listLifecycle.push(`ngAfterViewChecked: parent component : ${this.placeholder}`);
  }

}
