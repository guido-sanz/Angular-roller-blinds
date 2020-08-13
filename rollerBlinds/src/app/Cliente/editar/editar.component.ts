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
  c: Cliente;
  saveCliente: Cliente;
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
    const id= parseInt(localStorage.getItem("id"));
    this.service.getClienteId(id)
      .subscribe(data=>{
        this.saveCliente= data;

        this.formGroup.setValue({
          name: data.name,
          lastname: data.lastname,
          dni: data.dni,
          mail: data.mail,
          phone: data.phone
        })
      })
  }

   actualizar(){

    const cliente: Cliente = {
      dni: this.formGroup.get('dni').value,
      lastname: this.formGroup.get('lastname').value,
      name: this.formGroup.get('name').value,
      mail: this.formGroup.get('mail').value,
      phone: this.formGroup.get('phone').value,
      id: this.saveCliente.id,
      state: this.saveCliente.state
    }

    console.log('update: ', cliente);

    this.service.updateCliente(cliente)
      .subscribe(data=> {
        this.c = data;
        this.router.navigate(["listar"]);
       });
   }

}
