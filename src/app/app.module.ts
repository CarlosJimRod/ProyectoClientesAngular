import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AltaClienteComponent} from './componentes/alta-cliente/alta-cliente.component';
import {FormsModule} from "@angular/forms";
import { ListadoClientesComponent } from './componentes/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
