import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistORComponent } from './regist-or.component';

describe('RegistORComponent', () => {
  let component: RegistORComponent;
  let fixture: ComponentFixture<RegistORComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistORComponent]
    });
    fixture = TestBed.createComponent(RegistORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
