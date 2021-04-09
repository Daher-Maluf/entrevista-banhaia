import { Component, OnInit } from '@angular/core';
import { Articulo, ArticuloService } from 'src/services/articulo.service';




@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
 public articulos$;
         
  constructor(private service: ArticuloService) {

  }

  ngOnInit(): void {
   this.articulos$ = this.service.getArticulos();
    
  }

}
