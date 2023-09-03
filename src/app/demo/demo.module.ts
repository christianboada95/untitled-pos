import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// Demo pages
import { AppCodeModule } from './components/app-code/app.code.component';
import { DashboardDemoComponent } from './view/dashboarddemo.component';
import { FormLayoutDemoComponent } from './view/formlayoutdemo.component';
import { FloatLabelDemoComponent } from './view/floatlabeldemo.component';
import { InvalidStateDemoComponent } from './view/invalidstatedemo.component';
import { InputDemoComponent } from './view/inputdemo.component';
import { ButtonDemoComponent } from './view/buttondemo.component';
import { TableDemoComponent } from './view/tabledemo.component';
import { ListDemoComponent } from './view/listdemo.component';
import { TreeDemoComponent } from './view/treedemo.component';
import { PanelsDemoComponent } from './view/panelsdemo.component';
import { OverlaysDemoComponent } from './view/overlaysdemo.component';
import { MediaDemoComponent } from './view/mediademo.component';
import { MenusComponent } from './view/menus/menus.component';
import { MessagesDemoComponent } from './view/messagesdemo.component';
import { MiscDemoComponent } from './view/miscdemo.component';
import { EmptyDemoComponent } from './view/emptydemo.component';
import { ChartsDemoComponent } from './view/chartsdemo.component';
import { FileDemoComponent } from './view/filedemo.component';
import { DocumentationComponent } from './view/documentation.component';
import { IconsComponent } from './utilities/icons.component';
import { AppCrudComponent } from './pages/app.crud.component';
import { AppCalendarComponent } from './pages/app.calendar.component';
import { AppTimelineDemoComponent } from './pages/app.timelinedemo.component';
import { AppInvoiceComponent } from './pages/app.invoice.component';
import { AppHelpComponent } from './pages/app.help.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { AppWizardComponent } from './pages/app.wizard.component';
import { BlockViewer } from './components/blockviewer/blockviewer.component';
import { BlocksComponent } from './components/blocks/blocks.component';

// Demo services
import { CountryService } from './service/countryservice';
import { CustomerService } from './service/customerservice';
import { EventService } from './service/eventservice';
import { IconService } from './service/iconservice';
import { NodeService } from './service/nodeservice';
import { PhotoService } from './service/photoservice';
import { ProductService } from './service/productservice';
import { SharedModule } from '@shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DemoRoutingModule,
    HttpClientModule,
    AppCodeModule,

    SharedModule
  ],
  declarations: [
    DashboardDemoComponent,
    FormLayoutDemoComponent,
    FloatLabelDemoComponent,
    InvalidStateDemoComponent,
    InputDemoComponent,
    ButtonDemoComponent,
    TableDemoComponent,
    ListDemoComponent,
    TreeDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MediaDemoComponent,
    MenusComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent,
    IconsComponent,
    AppCrudComponent,
    AppCalendarComponent,
    AppTimelineDemoComponent,
    AppLoginComponent,
    AppInvoiceComponent,
    AppHelpComponent,
    AppNotfoundComponent,
    AppErrorComponent,
    AppAccessdeniedComponent,
    AppWizardComponent,
    BlockViewer,
    BlocksComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService,
  ],
})
export class DemoModule { }
