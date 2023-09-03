import { NgModule } from '@angular/core';

/** Modules */
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';

/** Components */
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        //CommonModule,  // Angular declaratives are provided by the BrowserModule too
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
