import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imagenFondo: boolean = true;
  title = 'rollerBlinds';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

  }


   touch(){
     this.imagenFondo = false;
     this.router.navigate(["listar"]);
   }

   touch2(){
     this.imagenFondo = false;
     this.router.navigate(["finalizado"]);
   }



}
