import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantsqlComponent } from './permanantsql.component';

describe('PermanantsqlComponent', () => {
  let component: PermanantsqlComponent;
  let fixture: ComponentFixture<PermanantsqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantsqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
