import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSubirArchivosComponent } from './vista-subir-archivos.component';

describe('VistaSubirArchivosComponent', () => {
  let component: VistaSubirArchivosComponent;
  let fixture: ComponentFixture<VistaSubirArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSubirArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSubirArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
