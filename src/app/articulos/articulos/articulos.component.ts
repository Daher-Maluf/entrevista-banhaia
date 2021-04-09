import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Articulo, ArticuloService } from 'src/services/articulo.service';




@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
 public articulos$: Observable<Articulo[]>;
         data: Array<Articulo>;
  constructor(private service: ArticuloService) {


  }

  ngOnInit(): void {
   this.articulos$ = this.service.getArticulos();
    
  }

}
