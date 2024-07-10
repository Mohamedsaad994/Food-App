import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweditcurrentuserComponent } from './vieweditcurrentuser.component';

describe('VieweditcurrentuserComponent', () => {
  let component: VieweditcurrentuserComponent;
  let fixture: ComponentFixture<VieweditcurrentuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieweditcurrentuserComponent]
    });
    fixture = TestBed.createComponent(VieweditcurrentuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
