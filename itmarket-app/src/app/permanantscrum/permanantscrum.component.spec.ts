import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantscrumComponent } from './permanantscrum.component';

describe('PermanantscrumComponent', () => {
  let component: PermanantscrumComponent;
  let fixture: ComponentFixture<PermanantscrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantscrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantscrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
