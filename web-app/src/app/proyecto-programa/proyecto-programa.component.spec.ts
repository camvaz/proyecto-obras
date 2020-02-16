import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoProgramaComponent } from './proyecto-programa.component';

describe('ProyectoProgramaComponent', () => {
  let component: ProyectoProgramaComponent;
  let fixture: ComponentFixture<ProyectoProgramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoProgramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
