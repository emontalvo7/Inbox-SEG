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
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccordionComponent,
    TableComponent,
    OffcanvasComponent,
    PaginadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
