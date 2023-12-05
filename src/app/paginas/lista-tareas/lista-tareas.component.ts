import { Component } from '@angular/core';
import { Tarea } from 'src/app/domain/tarea';
import { TareasFirestoreService } from 'src/app/services/tareas-firestore.service';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  tareas: Tarea[] = [];
  listaTareas: any;

  constructor(private tareasFirestore: TareasFirestoreService, private router: Router){
    this.listaTareas = this.tareasFirestore.listar();
  }

  editar(tarea: any){
    console.log('editando: ',tarea);
    console.log('uid: ',tarea.uid);

    let params: NavigationExtras = {
      queryParams: {
        tarea: tarea
      }
    };
    this.router.navigate(['paginas/tareas/'], params);
  }

}
