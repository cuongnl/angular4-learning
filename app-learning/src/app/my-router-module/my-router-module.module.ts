import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MyRouterModuleRoutingModule } from './my-router-module-routing.module';
import {AppComponent} from '../app.component'
import {BinddingComponentComponent} from '../bindding-component/bindding-component.component'
import {EventComponentComponent} from '../event-component/event-component.component'

@NgModule({
  declarations: [
    AppComponent,
    BinddingComponentComponent,
    EventComponentComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    MyRouterModuleRoutingModule
  ]
})
export class MyRouterModuleModule { }
