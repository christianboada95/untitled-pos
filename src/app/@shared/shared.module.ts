import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from 'app/material/material.module';
import { PrimeModule } from 'app/prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Components */
import { AppMainComponent } from '@shared/components/main/app.main.component';
import { AppMenuComponent } from '@shared/components/menu/app.menu.component';
import { AppMenuitemComponent } from '@shared/components/menu/app.menuitem.component';
import { AppProfileComponent } from '@shared/components/profile/app.profile.component';
import { AppBreadcrumbComponent } from '@shared/components/breadcrumb/app.breadcrumb.component';
import { AppTopBarComponent } from '@shared/components/topbar/app.topbar.component';
import { AppFooterComponent } from '@shared/components/footer/app.footer.component';

/** Directives */

/** Pipes */

/** Application services */
import { BreadcrumbService } from '@shared/services/app.breadcrumb.service';
import { MenuService } from '@shared/services/app.menu.service';

@NgModule({
  declarations: [
    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppProfileComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,   // ngIf, ngFor...
    RouterModule,   // routerLink, <router-oulet>
    FormsModule,
    ReactiveFormsModule,

    //MaterialModule,
    PrimeModule
  ],
  providers: [MenuService, BreadcrumbService]
})
export class SharedModule { }
