import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserrecipeComponent } from './viewuserrecipe.component';

describe('ViewuserrecipeComponent', () => {
  let component: ViewuserrecipeComponent;
  let fixture: ComponentFixture<ViewuserrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuserrecipeComponent]
    });
    fixture = TestBed.createComponent(ViewuserrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
