import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDepartamentoComponent } from './perfil-departamento.component';

describe('PerfilDepartamentoComponent', () => {
  let component: PerfilDepartamentoComponent;
  let fixture: ComponentFixture<PerfilDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
