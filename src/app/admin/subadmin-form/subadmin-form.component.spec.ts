import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubadminFormComponent } from './subadmin-form.component';

describe('SubadminFormComponent', () => {
  let component: SubadminFormComponent;
  let fixture: ComponentFixture<SubadminFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubadminFormComponent]
    });
    fixture = TestBed.createComponent(SubadminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
