import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AppMainComponent } from "@shared/components/main/app.main.component";
import { InventoryComponent } from "./pages/inventory/inventory.component";

const routes: Routes = [
  {
      path: '', component: AppMainComponent,
      children: [
          { path: '', component: DashboardComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'inventario', children: [
            { path: '', component: InventoryComponent },
            { path: 'productos', component: InventoryComponent },
            { path: 'servicios', component: InventoryComponent },
          ]}
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }