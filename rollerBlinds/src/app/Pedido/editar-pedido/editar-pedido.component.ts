import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { Pedido } from '../../modelo/Pedido';
import { Router } from '@angular/router';
import { Cliente } from '../../modelo/Cliente';
import { logging } from 'protractor';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';

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
    this.pedidoForm = new FormGroup({
      tipo: new FormControl('', Validators.required),
      tela: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      ladoCadena: new FormControl('', Validators.required),
      tipoCadena: new FormControl('', Validators.required),
      envio: new FormControl('', Validators.required),
      ancho: new FormControl('', Validators.required),
      alto: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    const id = parseInt(localStorage.getItem("pedido"));
    this.service.buscarPedidoId(id)
      .subscribe(data=>{
        this.p= data;

        this.pedidoForm.setValue({
          tipo: data.tipo,
          tela: data.tela,
          color: data.color,
          cantidad: data.cantidad,
          ladoCadena: data.ladoCadena,
          tipoCadena: data.tipoCadena,
          envio: data.envio,
          ancho: data.ancho,
          alto: data.alto
        })
      })
  }



  Guardar(){
    const pedidoEdit: Pedido = {
        tipo: this.pedidoForm.get('tipo').value,
        tela: this.pedidoForm.get('tela').value,
        color: this.pedidoForm.get('color').value,
        cantidad: this.pedidoForm.get('cantidad').value,
        ladoCadena: this.pedidoForm.get('ladoCadena').value,
        tipoCadena: this.pedidoForm.get('tipoCadena').value,
        envio: this.pedidoForm.get('envio').value,
        alto: this.pedidoForm.get('alto').value,
        ancho: this.pedidoForm.get('ancho').value,
        total: this.p.total,
        id: this.p.id,
        cliente: this.p.cliente
    }

    console.log('update: ', pedidoEdit);


    this.service.editarPedido(pedidoEdit)
    .subscribe(data=> {
      this.pedido = data;
      this.routes.navigate(["listar"]);
     });
    }
}
