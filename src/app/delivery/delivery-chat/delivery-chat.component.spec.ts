import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryChatComponent } from './delivery-chat.component';

describe('DeliveryChatComponent', () => {
  let component: DeliveryChatComponent;
  let fixture: ComponentFixture<DeliveryChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryChatComponent]
    });
    fixture = TestBed.createComponent(DeliveryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
