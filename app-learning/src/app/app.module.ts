import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyRouterModuleModule} from './my-router-module/my-router-module.module';
import { DirectivesComponentComponent } from './directives-component/directives-component.component';
import { DirectivesDirective } from './directives.directive';
import { ComponentsDirective } from './ridectives/basic/components.directive';


@NgModule({
  declarations: [DirectivesComponentComponent, DirectivesDirective, ComponentsDirective],
  imports: [
    BrowserModule,
    MyRouterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
