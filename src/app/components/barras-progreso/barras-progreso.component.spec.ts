import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasProgresoComponent } from './barras-progreso.component';

describe('BarrasProgresoComponent', () => {
  let component: BarrasProgresoComponent;
  let fixture: ComponentFixture<BarrasProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
