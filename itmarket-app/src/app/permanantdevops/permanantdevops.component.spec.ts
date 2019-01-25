import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantdevopsComponent } from './permanantdevops.component';

describe('PermanantdevopsComponent', () => {
  let component: PermanantdevopsComponent;
  let fixture: ComponentFixture<PermanantdevopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantdevopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantdevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
