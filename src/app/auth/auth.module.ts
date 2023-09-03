import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [AuthPageComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
