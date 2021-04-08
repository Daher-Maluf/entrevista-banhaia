
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
   selector: 'app-dialog',
    templateUrl: './dialog.component.html',
     styleUrls: ['./dialog.component.css']
   })

export class DialogComponent implements OnInit {
  nombreCtrl = new FormControl();
  descuentoCtrl = new FormControl();
  retorno = {nombre:''};

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.retorno.nombre = data.nombre;
    
  }

  changenombre(){
    this.retorno.nombre = this.nombreCtrl.value; 
    console.log('nombre: ', this.retorno.nombre);
  }


  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.nombreCtrl.setValue(this.retorno.nombre);

   }

}