import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { TableComponent } from './shared/table/table.component';
import { OffcanvasComponent } from './shared/offcanvas/offcanvas.component';
import { PaginadorComponent } from './shared/paginador/paginador.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagModule } from 'primeng/tag';
import { CustomerService } from './services/customer-service';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccordionComponent,
    TableComponent,
    OffcanvasComponent,
    PaginadorComponent,
    HomeComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    MultiSelectModule,
    TagModule,
    AccordionModule,
    SelectButtonModule,
    DialogModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
