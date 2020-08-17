import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelo/Cliente';
import { FormGroup } from '@angular/forms';
import { AgregarComponent } from '../Cliente/agregar/agregar.component';
import { Pedido } from '../modelo/Pedido';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  url = 'http://localhost:8080/clientes';

  getClientes(){
    return this.http.get<Cliente[]>(this.url+"/findAll");
  }

  getFinalizado(){
    return this.http.get<Cliente[]>(this.url+"/finalizados");
  }

  createCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.url+"/save", cliente);
  }

  getClienteId(id: number){
    return this.http.get<Cliente>(this.url+"/findClienteId"+"/" + id);
  }

  updateCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.url+"/edit" + "/" +cliente.id,cliente);
  }

  finalizarCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.url + "/finalizar"+ "/" + cliente.id,cliente);
  }

  delete(cliente: Cliente){
    return this.http.delete<Cliente>(this.url+"/delete"+"/" + cliente.id);
  }

  getPedidoId(id: number){
    return this.http.get<Pedido[]>(this.url+"/findPedidoId"+"/" + id);
  }

  createPedido(pedido: Pedido, id: number){
    return this.http.post<Pedido>(this.url+"/agregarPedido" + "/" + id, pedido);
  }

  editarPedido(pedido: Pedido){
    return this.http.put<Pedido>(this.url+"/editarPedido" + "/" + pedido.id, pedido);
  }

  buscarPedidoId(id: number){
    return this.http.get<Pedido>(this.url+"/buscarPedido" + "/" + id);
  }

  deletePedidoId(id: number, clienteId: number){
    return this.http.delete<Pedido>(this.url+"/deletePedido" + "/" + id + "/" + clienteId)
  }
}
