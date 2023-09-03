import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class LandingPageModule { }
