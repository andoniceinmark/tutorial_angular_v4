import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInteractivaComponent } from './demo-interactiva.component';

describe('DemoInteractivaComponent', () => {
  let component: DemoInteractivaComponent;
  let fixture: ComponentFixture<DemoInteractivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoInteractivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoInteractivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
