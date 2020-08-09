import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { Pedido } from '../../modelo/Pedido';
import { Router } from '@angular/router';
import { Cliente } from '../../modelo/Cliente';
import { logging } from 'protractor';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  pedido: Pedido;
  p: Pedido;
  constructor(private routes: Router, private service: ServiceService) {
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("pedido");
    this.service.buscarPedidoId(+id)
      .subscribe(data=>{
        this.p= data;
        console.log(this.p)
      });
  }



  Guardar(p: Pedido){
    this.service.editarPedido(this.p)
    .subscribe(data=> {
      this.p = data;
     alert("se actualizo con exito");
      this.routes.navigate(["listar"]);
     });
    }
}
