import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ArticulosComponent, ArticuloComponent,],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    

  ],
  exports:[
    ArticulosComponent,
  ]
})
export class ArticulosModule { }
