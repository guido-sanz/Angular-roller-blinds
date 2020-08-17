import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { ServiceService } from './Service/service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FinalizadoComponent } from './Cliente/finalizado/finalizado.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { ListarPedidoComponent } from './Pedido/listar/listar.component';
import { AgregarPedidoComponent } from './Pedido/agregar-pedido/agregar-pedido.component';
import { EditarPedidoComponent } from './Pedido/editar-pedido/editar-pedido.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    MenuComponent,
    FinalizadoComponent,
    EditarComponent,
    ListarPedidoComponent,
    AgregarPedidoComponent,
    EditarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
