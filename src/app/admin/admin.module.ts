import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

/** Pages */
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventoryComponent } from './pages/inventory/inventory.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
  ],
  imports: [
    AdminRoutingModule,

    SharedModule
  ]
})
export class AdminModule { }
