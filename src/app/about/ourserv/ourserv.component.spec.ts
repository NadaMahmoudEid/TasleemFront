import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurservComponent } from './ourserv.component';

describe('OurservComponent', () => {
  let component: OurservComponent;
  let fixture: ComponentFixture<OurservComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurservComponent]
    });
    fixture = TestBed.createComponent(OurservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
