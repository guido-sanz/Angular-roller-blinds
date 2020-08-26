import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenFondo: boolean = true;
  title = 'rollerBlinds';
  constructor(private router: Router) { }

  touch(){
    this.imagenFondo = false;
    this.router.navigate(["listar"]);
  }

  touch2(){
    this.imagenFondo = false;
    this.router.navigate(["finalizado"]);
  }
}
