import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MyRouterModuleRoutingModule } from './my-router-module-routing.module';
import {AppComponent} from '../app.component'
import {BinddingComponentComponent} from '../bindding-component/bindding-component.component'
import {EventComponentComponent} from '../event-component/event-component.component'
import { FormsModule } from '@angular/forms';
import { ExcuteServiceComponent } from '../excute-service/excute-service.component';

@NgModule({
  declarations: [
    AppComponent,
    BinddingComponentComponent,
    EventComponentComponent, 
    ExcuteServiceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,

    MyRouterModuleRoutingModule
  ]
})
export class MyRouterModuleModule { }
