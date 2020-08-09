import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Pedido } from '../../modelo/Pedido';




@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarPedidoComponent implements OnInit {

  constructor(private service: ServiceService, private routes: Router) { }
  items: Pedido[];
  pedido: Pedido;

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
      });
  }

  editar(pedido: Pedido){
    localStorage.setItem("pedido", pedido.id.toString());
    console.log(pedido);
    this.routes.navigate(["EditarPedido"]);
  }

}
