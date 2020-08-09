import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { Pedido } from '../../modelo/Pedido';


@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent implements OnInit {
  formGroup: FormGroup;
  pedido: Pedido;
  constructor(private routes: Router, private service: ServiceService) {
    this.formGroup = new FormGroup({
      id: new FormControl(''),
      tipo: new FormControl('', Validators.required),
      tela: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      ancho: new FormControl('', Validators.required),
      alto: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      ladoCadena: new FormControl('', Validators.required),
      tipoCadena: new FormControl('', Validators.required),
      envio: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  get tipo(): AbstractControl{
    return this.formGroup.get('tipo');
  }

  get tela(): AbstractControl{
    return this.formGroup.get('tela');
  }

  get color(): AbstractControl{
    return this.formGroup.get('color');
  }

  get ancho(): AbstractControl{
    return this.formGroup.get('ancho');
  }

  get alto(): AbstractControl{
    return this.formGroup.get('alto');
  }

  get ladoCadena(): AbstractControl{
    return this.formGroup.get('ladoCadena');
  }

  get cantidad(): AbstractControl{
    return this.formGroup.get('cantidad');
  }

  get tipoCadena(): AbstractControl{
    return this.formGroup.get('tipoCadena');
  }

  get envio(): AbstractControl{
    return this.formGroup.get('envio');
  }


  Guardar(){
    let id= localStorage.getItem("id");
    this.pedido = this.formGroup.value;
    console.log('Submit', this.pedido);
    this.service.createPedido(this.pedido, +id)
      .subscribe(data=>{
        this.routes.navigate(["listar"]);
      })
  }

}
