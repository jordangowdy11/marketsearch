import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantawsComponent } from './permanantaws.component';

describe('PermanantawsComponent', () => {
  let component: PermanantawsComponent;
  let fixture: ComponentFixture<PermanantawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
