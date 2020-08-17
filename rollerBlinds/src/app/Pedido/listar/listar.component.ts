import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Pedido } from '../../modelo/Pedido';
import { PdfMakeWrapper, Txt, Table, Cell } from 'pdfmake-wrapper';




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

  deletePedido(pedido: Pedido){
      this.service.deletePedidoId(pedido.id, pedido.cliente.id)
      .subscribe(data=>{
        this.pedido= data;
        this.routes.navigate(["listar"]);
  });
}

  generarPDF(pedido: Pedido){
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Table([
        [
        new Txt('Column 1').bold().end,
        'Column 2',
        'Column 3'
        ]
      ]).end
    )

    pdf.add(
    this.items.forEach(element => {
      new Cell([
        [ element.color, element.ladoCadena],
      ]).end
    })
    )
    pdf.create().open();
  }
}

//this.items.forEach(element => {
//  pdf.add(
//  new Txt(element.color).end
//);
//});
