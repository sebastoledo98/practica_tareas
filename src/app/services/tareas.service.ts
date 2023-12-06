import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/domain/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea[] = [];

  constructor() { }

  addTarea(tarea: Tarea){
    this.tareas.push(tarea);
  }

  getTareas(){
    return this.tareas;
  }

}
