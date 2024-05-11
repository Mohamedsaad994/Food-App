import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditrecipeComponent } from './addeditrecipe.component';

describe('AddeditrecipeComponent', () => {
  let component: AddeditrecipeComponent;
  let fixture: ComponentFixture<AddeditrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditrecipeComponent]
    });
    fixture = TestBed.createComponent(AddeditrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
