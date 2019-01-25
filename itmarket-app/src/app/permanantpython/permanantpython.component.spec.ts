import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantpythonComponent } from './permanantpython.component';

describe('PermanantpythonComponent', () => {
  let component: PermanantpythonComponent;
  let fixture: ComponentFixture<PermanantpythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantpythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantpythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
