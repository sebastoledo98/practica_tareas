import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { ListaTareasComponent } from './paginas/lista-tareas/lista-tareas.component';
import { MenuComponent } from './menu/menu.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';
import { ViewTareasComponent } from './paginas/view-tareas/view-tareas.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ListaTareasComponent,
    MenuComponent,
    ViewTareasComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule.enablePersistence(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
