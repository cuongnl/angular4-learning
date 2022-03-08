import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MyRouterModuleRoutingModule } from './my-router-module-routing.module';
import { AppComponent } from '../app.component'
import { BinddingComponentComponent } from '../bindding-component/bindding-component.component'
import { EventComponentComponent } from '../event-component/event-component.component'
import { FormsModule } from '@angular/forms';
import { ExcuteServiceComponent } from '../excute-service/excute-service.component';
import { InputComponentDirectiveComponent } from '../input-component-directive/input-component-directive.component';
import { DirectivesComponentComponent } from '../directives-component/directives-component.component';
import { TranferDataComponentAComponent } from '../tranfer-data-component-a/tranfer-data-component-a.component';
import { TranferDataComponentBComponent } from '../tranfer-data-component-b/tranfer-data-component-b.component';
import { TranferDataBetweenComponentComponent } from '../tranfer-data-between-component/tranfer-data-between-component.component';
import { ComponentLifecycleComponent } from '../component-lifecycle/component-lifecycle.component';
import { NgOnChangeLifeCycleComponent } from '../ng-on-change-life-cycle/ng-on-change-life-cycle.component';
import { StructureDirectiveComponent } from '../structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from '../attribute-directive/attribute-directive.component';
import { HtmlComponent } from '../html/html.component';
import { CssComponent } from '../css/css.component';
import { ComponentInteractionComponent } from '../component-interaction/component-interaction.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponentComponent,
    BinddingComponentComponent,
    EventComponentComponent, 
    ExcuteServiceComponent,
    InputComponentDirectiveComponent,
    TranferDataBetweenComponentComponent,
    TranferDataComponentAComponent,
    TranferDataComponentBComponent,
    ComponentLifecycleComponent,
    NgOnChangeLifeCycleComponent,
    StructureDirectiveComponent, 
    AttributeDirectiveComponent,
    HtmlComponent,
    CssComponent,
    ComponentInteractionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,

    MyRouterModuleRoutingModule
  ],
  exports:[
    MyRouterModuleRoutingModule
  ]
})
export class MyRouterModuleModule { }
