import { Injectable } from '@angular/core';
import { NmsHttpClientService } from './core/http-client';

export interface Articulo {
  id: string;
  creacion: string;
  modificado: string;
  nombre: string;
  descripcion: string;
  image: string;
}
[];

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  constructor(private http: NmsHttpClientService) {}

  getArticulos() {
    return this.http.get<Articulo[]>('entrevista/articulos');
  }
}
