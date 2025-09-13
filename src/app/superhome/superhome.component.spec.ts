import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhomeComponent } from './superhome.component';

describe('SuperhomeComponent', () => {
  let component: SuperhomeComponent;
  let fixture: ComponentFixture<SuperhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
