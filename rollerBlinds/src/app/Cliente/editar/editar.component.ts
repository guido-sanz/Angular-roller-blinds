import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from '../../modelo/Cliente';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @Input() id: number;
  cliente: Cliente = new Cliente();
  formGroup: FormGroup;
  constructor(private router: Router, private service: ServiceService) {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getClienteId(+id)
      .subscribe(data=>{
        this.cliente= data;
      })
  }

   actualizar(cliente: Cliente){
    this.service.updateCliente(cliente)
      .subscribe(data=> {
        this.cliente = data;
       alert("se actualizo con exito");
        this.router.navigate(["listar"]);
       });
   }

}
