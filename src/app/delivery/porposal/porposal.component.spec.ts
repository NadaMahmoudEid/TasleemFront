import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorposalComponent } from './porposal.component';

describe('PorposalComponent', () => {
  let component: PorposalComponent;
  let fixture: ComponentFixture<PorposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorposalComponent]
    });
    fixture = TestBed.createComponent(PorposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
