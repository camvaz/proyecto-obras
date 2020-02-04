import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProyectoComponent } from './page-proyecto.component';

describe('PageProyectoComponent', () => {
  let component: PageProyectoComponent;
  let fixture: ComponentFixture<PageProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
