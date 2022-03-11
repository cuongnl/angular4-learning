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
import { HtmlComponent } from '../html/html.component';
import { CssComponent } from '../css/css.component';
import { TemplateVariableViewChildViewChildrenComponent } from '../template-variable-view-child-view-children/template-variable-view-child-view-children.component';
import { TypeScriptDataTypeComponent } from '../type-script-data-type/type-script-data-type.component';
import { NgTemplateComponent } from '../ng-template/ng-template.component';
import { PipesComponent } from '../pipes/pipes.component';

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
    },
    {
        path: 'html',
        component: HtmlComponent
    },
    {
        path: 'css',
        component: CssComponent
    },
    {
        path: 'TemplateVariable',
        component: TemplateVariableViewChildViewChildrenComponent
    },
    {
        path: 'TypeScriptDataType',
        component: TypeScriptDataTypeComponent
    },
    {
        path: 'ngTemplate',
        component: NgTemplateComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    }
    
];