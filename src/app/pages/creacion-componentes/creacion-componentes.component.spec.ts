import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComponentesComponent } from './creacion-componentes.component';

describe('CreacionComponentesComponent', () => {
  let component: CreacionComponentesComponent;
  let fixture: ComponentFixture<CreacionComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionComponentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
