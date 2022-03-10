import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyRouterModuleModule} from './my-router-module/my-router-module.module';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProjectionExcuteComponent } from './content-projection-excute/content-projection-excute.component';
import {ToggleComponentComponent} from './toggle-component/toggle-component.component';

@NgModule({
  declarations: [ContentProjectionComponent, ContentProjectionExcuteComponent, ToggleComponentComponent],
  imports: [
    BrowserModule,
    MyRouterModuleModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
