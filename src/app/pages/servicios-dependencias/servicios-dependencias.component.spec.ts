import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDependenciasComponent } from './servicios-dependencias.component';

describe('ServiciosDependenciasComponent', () => {
  let component: ServiciosDependenciasComponent;
  let fixture: ComponentFixture<ServiciosDependenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosDependenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
