import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPriceComponent } from './our-price.component';

describe('OurPriceComponent', () => {
  let component: OurPriceComponent;
  let fixture: ComponentFixture<OurPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPriceComponent]
    });
    fixture = TestBed.createComponent(OurPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
