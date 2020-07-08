import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


// Servicios
import { DataService } from '../../shared/services/data.service'

// Modelos
import { Usuario } from '../../shared/models/usuario'



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  title = '';
  formGroup: FormGroup = new FormGroup({
  nombre: new FormControl(null, [Validators.required]),
  apellido: new FormControl(null, [Validators.required]),
  descripcion: new FormControl(null, [Validators.required]),
});

  constructor(public dialogRef: MatDialogRef<UsuarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public _dataService: DataService ) {

                if (data) {
                  this.title = 'Editar Usuario';
                  // this.formGroup.controls.nombre.setValue(this.data.portafolio.leaders[0].leaId);

                } else {
                  this.title = "Nuevo Usuario"
                }
              }

  ngOnInit(): void {
  }

  agregar(){
    if (this.formGroup.valid) {
    const USUARIO: Usuario ={
      nombre: this.formGroup.get('nombre').value,
      apellido: this.formGroup.get('apellido').value,
      descripcion: this.formGroup.get('descripcion').value
      }
      this._dataService.agregarUsuario( USUARIO ).subscribe(
        res => {
          console.log(res);
          this.dialogRef.close();
        }
      );
  }
}

  cerrar(): void {
    this.dialogRef.close();
  }

}
