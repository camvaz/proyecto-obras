import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesResueltosComponent } from './componentes-resueltos.component';

describe('ComponentesResueltosComponent', () => {
  let component: ComponentesResueltosComponent;
  let fixture: ComponentFixture<ComponentesResueltosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesResueltosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesResueltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
