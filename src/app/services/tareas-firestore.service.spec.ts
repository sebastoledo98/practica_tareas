import { TestBed } from '@angular/core/testing';

import { TareasFirestoreService } from './tareas-firestore.service';

describe('TareasFirestoreService', () => {
  let service: TareasFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
