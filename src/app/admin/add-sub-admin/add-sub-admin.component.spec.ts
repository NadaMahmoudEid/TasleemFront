import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubAdminComponent } from './add-sub-admin.component';

describe('AddSubAdminComponent', () => {
  let component: AddSubAdminComponent;
  let fixture: ComponentFixture<AddSubAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubAdminComponent]
    });
    fixture = TestBed.createComponent(AddSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
