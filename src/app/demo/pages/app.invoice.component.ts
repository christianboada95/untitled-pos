import {Component} from '@angular/core';
import {BreadcrumbService} from '@shared/services/app.breadcrumb.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './app.invoice.component.html',
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pages'},
            {label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }
}
