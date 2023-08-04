import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPorposalsComponent } from './job-porposals.component';

describe('JobPorposalsComponent', () => {
  let component: JobPorposalsComponent;
  let fixture: ComponentFixture<JobPorposalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobPorposalsComponent]
    });
    fixture = TestBed.createComponent(JobPorposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
