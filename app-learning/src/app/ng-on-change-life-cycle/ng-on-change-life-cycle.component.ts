import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change-life-cycle',
  templateUrl: './ng-on-change-life-cycle.component.html',
  styleUrls: ['./ng-on-change-life-cycle.component.css']
})
export class NgOnChangeLifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() placeholder: String;
  @Input() listLifecycle: String[];

  constructor() { }

  //user tranfer between component.
  ngOnChanges(changes: SimpleChanges){
    console.log("ngChange")
    for(const propName in changes){
      const property = changes[propName];
      const current = JSON.stringify(property.currentValue);
      const prev = JSON.stringify(property.previousValue);
      this.listLifecycle.push(`ngOnChange: current ${current} - prev ${prev}`);
    }
  }

  ngOnInit(): void {
    this.listLifecycle.push(`ngOnInit: in child component : ${this.placeholder}`);
  }

  ngDoCheck(): void {
    this.listLifecycle.push(`ngDoCheck: in child component : ${this.placeholder}`);
  }

  ngAfterContentInit(): void {
    this.listLifecycle.push(`ngAfterContentInit: child component : ${this.placeholder}`);
  }

  ngAfterContentChecked(): void {
    this.listLifecycle.push(`ngAfterContentChecked: child component : ${this.placeholder}`);
  }

  ngAfterViewInit(): void {
    this.listLifecycle.push(`ngAfterViewInit: child component : ${this.placeholder}`);
  }

  ngAfterViewChecked(): void {
    this.listLifecycle.push(`ngAfterViewChecked: child component : ${this.placeholder}`);
  }

  ngOnDestroy(): void {
    this.listLifecycle.push(`ngOnDestroy: child component : ${this.placeholder}`);
  }
}
