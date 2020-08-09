import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/Cliente';
import { ServiceService } from '../../Service/service.service';



@Component({
  selector: 'app-finalizado',
  templateUrl: './finalizado.component.html',
  styleUrls: ['./finalizado.component.css']
})
export class FinalizadoComponent implements OnInit {
  items: Cliente[];
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getFinalizado()
      .subscribe(data=>{
        this.items = data;
      });
  }

}
