import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorposalDetailsComponent } from './porposal-details.component';

describe('PorposalDetailsComponent', () => {
  let component: PorposalDetailsComponent;
  let fixture: ComponentFixture<PorposalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorposalDetailsComponent]
    });
    fixture = TestBed.createComponent(PorposalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
