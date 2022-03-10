import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tranfer-data-component-b',
  templateUrl: './tranfer-data-component-b.component.html',
  styleUrls: ['./tranfer-data-component-b.component.css']
})
export class TranferDataComponentBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Nguyễn Văn A';

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
