import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/domain/tarea';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TareasFirestoreService {

  private path = '/tareas';

  tareasRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.tareasRef = db.collection(this.path);
    this.tareasRef.valueChanges().subscribe(data => {
      console.log(data);
    });
  }

  listar(){
    return this.tareasRef.valueChanges();
  }

  guardar(tarea: Tarea){
    console.log(tarea.uid);
    if(tarea.uid == null){
      tarea.uid = this.db.createId();
    }
    console.log(tarea.uid);
    console.log('tarea: ',tarea);
    return this.tareasRef.doc(tarea.uid).set(Object.assign({}, tarea));
  }

  leer(uid: string){
    console.log('uid: ',uid);
    return this.db.doc(this.path+'/'+uid).valueChanges();
  }

  eliminar(uid?: string){
    console.log('eliminando ',uid);
    this.tareasRef.doc(uid).delete();
    //window.location.reload();
    return;
  }

}
