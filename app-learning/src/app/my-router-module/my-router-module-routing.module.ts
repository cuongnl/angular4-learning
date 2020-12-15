import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from './RoutesConfig';

@NgModule({
  imports: [
    RouterModule.forRoot(RoutesConfig)
  ],
  exports: [RouterModule]
})
export class MyRouterModuleRoutingModule { }
