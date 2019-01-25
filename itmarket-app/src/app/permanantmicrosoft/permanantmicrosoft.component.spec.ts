import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantmicrosoftComponent } from './permanantmicrosoft.component';

describe('PermanantmicrosoftComponent', () => {
  let component: PermanantmicrosoftComponent;
  let fixture: ComponentFixture<PermanantmicrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantmicrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantmicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
