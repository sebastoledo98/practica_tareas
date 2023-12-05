import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasFirestoreService } from 'src/app/services/tareas-firestore.service';
import { Tarea } from 'src/app/domain/tarea';
//import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tarea: Tarea = new Tarea();
  mensaje: string = '';

  constructor(private router: Router,
              private tareasFirestore: TareasFirestoreService
              //public dialog: MatDialog
             ) {
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      message: 'Tarea agregada con exito'
    };
    dialogConfig.minWidth = 400;
    const dialogRef = this.dialog.open();*/

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params);
      this.tarea = params['tarea'];
    }
  }

  guardarTarea(){
    this.tareasFirestore.guardar(this.tarea);
    this.mensaje = 'Tarea agregada con exito';
    this.tarea = new Tarea();
  }

  listarTareas(){
    this.router.navigate(['paginas/lista-tareas']);
  }
}
