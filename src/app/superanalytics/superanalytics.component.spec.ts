import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperanalyticsComponent } from './superanalytics.component';

describe('SuperanalyticsComponent', () => {
  let component: SuperanalyticsComponent;
  let fixture: ComponentFixture<SuperanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperanalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
