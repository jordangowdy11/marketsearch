import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractedComponent } from './contracted.component';

describe('ContractedComponent', () => {
  let component: ContractedComponent;
  let fixture: ComponentFixture<ContractedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
