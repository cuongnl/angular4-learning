import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'appTitle'
})

export class AppTitlePipe implements PipeTransform {
    transform(resourceId: string): string {
        return resourceId ? "Edit" : "Add";
    }
}