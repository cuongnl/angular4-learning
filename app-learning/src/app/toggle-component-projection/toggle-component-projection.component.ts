import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-component-projection',
  templateUrl: './toggle-component-projection.component.html',
  styleUrls: ['./toggle-component-projection.component.css']
})
export class ToggleComponentProjectionComponent implements OnInit {

  constructor() { }

  @Input() canKip: boolean;
  @Input() checked: boolean;

  ngOnInit(): void {
  }

  toggle() {
    this.checked = !this.checked;
  }
}
