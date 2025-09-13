import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserlistComponent } from './manageuserlist.component';

describe('ManageuserlistComponent', () => {
  let component: ManageuserlistComponent;
  let fixture: ComponentFixture<ManageuserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageuserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
