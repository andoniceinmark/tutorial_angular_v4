import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasNavegacionComponent } from './rutas-navegacion.component';

describe('RutasNavegacionComponent', () => {
  let component: RutasNavegacionComponent;
  let fixture: ComponentFixture<RutasNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasNavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
