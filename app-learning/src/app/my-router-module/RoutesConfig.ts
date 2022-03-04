import { Routes } from '@angular/router';
import { BinddingComponentComponent } from '../bindding-component/bindding-component.component';
import { EventComponentComponent } from '../event-component/event-component.component';
import { NgModelAndFormFieldsComponent } from '../ng-model-and-form-fields/ng-model-and-form-fields.component'
import { ExcuteServiceComponent } from '../excute-service/excute-service.component'
import { DirectivesComponentComponent } from '../directives-component/directives-component.component'
import { TranferDataBetweenComponentComponent } from '../tranfer-data-between-component/tranfer-data-between-component.component';
import { ComponentLifecycleComponent } from '../component-lifecycle/component-lifecycle.component';
import { ContentProjectionExcuteComponent } from '../content-projection-excute/content-projection-excute.component';
import { StructureDirectiveComponent } from '../structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from '../attribute-directive/attribute-directive.component';

export const RoutesConfig: Routes = [
    {
        path: 'bindding',
        component: BinddingComponentComponent
    },
    {
        path: 'event',
        component: EventComponentComponent
    },
    {
        path: 'ngModelAndFormFields',
        component: NgModelAndFormFieldsComponent
    },
    {
        path: 'excuteServiceComponent',
        component: ExcuteServiceComponent
    },
    {
        path: 'directivesComponentComponent',
        component: DirectivesComponentComponent
    },
    {
        path: 'tranferDataBetweenComponentComponent',
        component: TranferDataBetweenComponentComponent
    },
    {
        path: 'componentLifecycleComponent',
        component: ComponentLifecycleComponent
    },

    {
        path: 'componentContentProjection',
        component: ContentProjectionExcuteComponent
    },
    
    {
        path: 'structureDirective',
        component: StructureDirectiveComponent
    },
    {
        path: 'attributeDirective',
        component: AttributeDirectiveComponent
    }
];