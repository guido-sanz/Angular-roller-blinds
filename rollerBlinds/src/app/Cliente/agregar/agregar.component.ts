import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from '../../modelo/Cliente';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  cliente: Cliente;
  formGroup: FormGroup;
  constructor(private router: Router, private service: ServiceService) {
    this.formGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }


  get name(): AbstractControl{
    return this.formGroup.get('name');
  }

  get lastname(): AbstractControl{
    return this.formGroup.get('lastname')
  }

  get dni(): AbstractControl{
    return this.formGroup.get('dni')
  }

  get mail(): AbstractControl{
    return this.formGroup.get('mail')
  }

  get phone(): AbstractControl{
    return this.formGroup.get('phone')
  }

  Guardar(){
    this.cliente = this.formGroup.value;
    console.log('Submit', this.cliente);
    this.service.createCliente(this.cliente)
      .subscribe(data=>{
        this.router.navigate(["listar"]);
      })
  }



}
