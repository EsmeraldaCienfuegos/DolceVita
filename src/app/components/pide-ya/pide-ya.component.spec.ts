import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PideYaComponent } from './pide-ya.component';

describe('PideYaComponent', () => {
  let component: PideYaComponent;
  let fixture: ComponentFixture<PideYaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PideYaComponent]
    });
    fixture = TestBed.createComponent(PideYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
