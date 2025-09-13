import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportssuperComponent } from './reportssuper.component';

describe('ReportssuperComponent', () => {
  let component: ReportssuperComponent;
  let fixture: ComponentFixture<ReportssuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportssuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportssuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
