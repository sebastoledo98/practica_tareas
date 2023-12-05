import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TareasFirestoreService } from 'src/app/services/tareas-firestore.service';
import { Tarea } from 'src/app/domain/tarea';

@Component({
  selector: 'app-view-tareas',
  templateUrl: './view-tareas.component.html',
  styleUrls: ['./view-tareas.component.css']
})
export class ViewTareasComponent {

  tarea: Tarea = new Tarea();
  mensaje: string = '';

  constructor(private router: Router,
              private tareasFirestore: TareasFirestoreService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params['uid']){
        this.loadTarea(params['uid'])
      }
    });
  }

  loadTarea(uid: string){
    this.tareasFirestore.leer(uid).subscribe(data => {
      console.log(data);
      this.tarea = <any> data;
    });
  }

  actualizarTarea(){
    this.tareasFirestore.guardar(this.tarea);
    this.mensaje = 'Se actualizo la tarea';
    this.tarea = new Tarea();
  }

  listarTareas(){
    this.router.navigate(['paginas/lista-tareas']);
  }

  eliminarTarea(){
    this.tareasFirestore.eliminar(this.tarea.uid);
    this.tarea = new Tarea();
    this.mensaje = 'Se elimino la tarea';
  }

}
