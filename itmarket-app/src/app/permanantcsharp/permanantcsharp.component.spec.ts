import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantcsharpComponent } from './permanantcsharp.component';

describe('PermanantcsharpComponent', () => {
  let component: PermanantcsharpComponent;
  let fixture: ComponentFixture<PermanantcsharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantcsharpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantcsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
