import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPanacotasComponent } from './inicio-panacotas.component';

describe('InicioPanacotasComponent', () => {
  let component: InicioPanacotasComponent;
  let fixture: ComponentFixture<InicioPanacotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioPanacotasComponent]
    });
    fixture = TestBed.createComponent(InicioPanacotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
