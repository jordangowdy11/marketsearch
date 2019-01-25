import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantjavaComponent } from './permanantjava.component';

describe('PermanantjavaComponent', () => {
  let component: PermanantjavaComponent;
  let fixture: ComponentFixture<PermanantjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
