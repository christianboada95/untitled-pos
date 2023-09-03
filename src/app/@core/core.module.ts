import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/** Interceptor */
import { JwtInterceptor } from './interceptors/jwt.interceptor';


@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  imports: [
    HttpClientModule,
  ],
  exports: []
})
export class CoreModule { }
