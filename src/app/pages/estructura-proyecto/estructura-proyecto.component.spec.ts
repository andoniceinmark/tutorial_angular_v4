import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraProyectoComponent } from './estructura-proyecto.component';

describe('EstructuraProyectoComponent', () => {
  let component: EstructuraProyectoComponent;
  let fixture: ComponentFixture<EstructuraProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuraProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
