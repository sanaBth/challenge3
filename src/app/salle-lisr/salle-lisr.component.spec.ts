import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleLisrComponent } from './salle-lisr.component';

describe('SalleLisrComponent', () => {
  let component: SalleLisrComponent;
  let fixture: ComponentFixture<SalleLisrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleLisrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleLisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
