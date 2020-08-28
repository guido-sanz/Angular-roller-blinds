import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from '../../modelo/Cliente';
import { Router } from '@angular/router';


@Component({

  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  items: Cliente[];
  cliente: Cliente;
  constructor(private service: ServiceService, private routes: Router)  { }

  ngOnInit(): void {
    this.service.getClientes()
      .subscribe(data=>{
        this.items = data;
      });
      console.log(this.routes.url);
  }

  Editar(cliente: Cliente):void{
    localStorage.setItem("id", cliente.id.toString());
    this.routes.navigate(["editar"]);
  }

  Finalizar(cliente: Cliente){
    this.service.finalizarCliente(cliente)
    .subscribe(data=> {
      this.cliente = data;
    this.routes.navigate(["/finalizado"]);
      });
 }

 Delete(cliente: Cliente){
    this.service.delete(cliente)
      .subscribe(data=>{
        this.cliente = data;
        this.routes.navigate(["/"]);
      })
 }

 ListarPedidos(cliente: Cliente){
    localStorage.setItem("id", cliente.id.toString());
    console.log(cliente.id);
    this.routes.navigate(["/listarPedido"]);
 }

 agregarPedido(cliente: Cliente){
  localStorage.setItem("id", cliente.id.toString());
  this.routes.navigate(["agregarPedido"]);
  }

  redirectToIndex(){
    let url = this.routes.url;
    if(url != "/listar"){
      this.routes.navigate([""])
    }
  }

}
