import {Component} from '@angular/core';
import {BreadcrumbService} from '@shared/services/app.breadcrumb.service';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {
    
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pages'},
            {label: 'Empty Page'}
        ]);
    }
}
