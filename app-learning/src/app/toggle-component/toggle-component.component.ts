import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-component',
  templateUrl: './toggle-component.component.html',
  styleUrls: ['./toggle-component.component.css']
})
export class ToggleComponentComponent implements OnInit {

  constructor() { }


  @Input() header: string;
  @Input() question: string;
  @Input() content: string;
  @Input() canKip: boolean;
  @Input() checked: boolean;

  ngOnInit(): void {
  }

  toggle() {
    this.checked = !this.checked;
  }

}
