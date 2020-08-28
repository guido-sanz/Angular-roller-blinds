import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Pedido } from '../../modelo/Pedido';
import { element } from 'protractor';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarPedidoComponent implements OnInit{


  constructor(private service: ServiceService, private routes: Router) { }
  items: Pedido[];
  pedido: Pedido;
  sumaTotalPedido:number=0;


  ngOnInit(): void {
    this.ListaDePedidos();

  }

  ListaDePedidos(){
    let id= localStorage.getItem("id");
    console.log(id);
    this.service.getPedidoId(+id)
      .subscribe(data=>{
        this.items= data;
        console.log(this.items);
       this.sumaPedidos();
      });
  }

  editar(pedido: Pedido){
    localStorage.setItem("pedido", pedido.id.toString());
    console.log(pedido);
    this.routes.navigate(["EditarPedido"]);
  }

  deletePedido(pedido: Pedido){
      this.service.deletePedidoId(pedido.id, pedido.cliente.id)
      .subscribe(data=>{
        this.pedido= data;
        this.routes.navigate(["listar"]);
  });
}

sumaPedidos(){
  this.items.forEach(element => {
    this.sumaTotalPedido = this.sumaTotalPedido + element.total;
  });
}

}


