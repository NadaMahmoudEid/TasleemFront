import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPageComponent } from './suggestions-page.component';

describe('SuggestionsPageComponent', () => {
  let component: SuggestionsPageComponent;
  let fixture: ComponentFixture<SuggestionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionsPageComponent]
    });
    fixture = TestBed.createComponent(SuggestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
