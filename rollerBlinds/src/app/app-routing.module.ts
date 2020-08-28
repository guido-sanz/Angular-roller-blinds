import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { FinalizadoComponent } from './Cliente/finalizado/finalizado.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { ListarPedidoComponent } from './Pedido/listar/listar.component';
import { AgregarPedidoComponent } from './Pedido/agregar-pedido/agregar-pedido.component';
import { EditarPedidoComponent } from './Pedido/editar-pedido/editar-pedido.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AgregarComponent},
  {path: 'listar/add', component: AgregarComponent},
  {path: 'finalizado', component: FinalizadoComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'listarPedido', component: ListarPedidoComponent},
  {path: 'listar/listarPedido', pathMatch: 'full', redirectTo: 'listarPedido'},
  {path: 'agregarPedido', component: AgregarPedidoComponent},
  {path: 'EditarPedido', component: EditarPedidoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
