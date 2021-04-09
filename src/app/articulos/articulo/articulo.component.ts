import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';
import { Articulo } from 'src/services/articulo.service';
import { NmsHttpClientService } from 'src/services/core/http-client';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input()articulo: Articulo;


  constructor(private httpSrv: NmsHttpClientService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }




  onEdit(articulo: Articulo) {
    this.openDialogo();
  }


  actualizarArticulo( nombre: string) {
    this.articulo.nombre = nombre;
    this.httpSrv.put(this.articulo);
  }

  openDialogo() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      nombre: this.articulo.nombre,
    };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('Dialog output:', JSON.stringify(result));
        if (result && result.nombre.length > 0) {
          this.actualizarArticulo(result.nombre);
          
        }
        
      }
    );
  }

}
