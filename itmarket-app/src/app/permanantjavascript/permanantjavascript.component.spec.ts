import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantjavascriptComponent } from './permanantjavascript.component';

describe('PermanantjavascriptComponent', () => {
  let component: PermanantjavascriptComponent;
  let fixture: ComponentFixture<PermanantjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
