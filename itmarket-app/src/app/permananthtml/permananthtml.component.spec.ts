import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermananthtmlComponent } from './permananthtml.component';

describe('PermananthtmlComponent', () => {
  let component: PermananthtmlComponent;
  let fixture: ComponentFixture<PermananthtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermananthtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermananthtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
