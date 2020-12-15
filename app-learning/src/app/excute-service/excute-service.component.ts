import { Component, OnInit } from '@angular/core';
import { TimeServiceService } from '../service/service_basic/time-service.service'

@Component({
  selector: 'app-excute-service',
  templateUrl: './excute-service.component.html',
  styleUrls: ['./excute-service.component.css']
})
export class ExcuteServiceComponent implements OnInit {

  timeValue: String;
  constructor(private time: TimeServiceService) { 
    this.timeValue = time.getTime();
  }
  ngOnInit(): void {
    
  }


}
