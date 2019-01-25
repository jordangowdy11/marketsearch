import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharpComponent } from './csharp.component';

describe('CSharpComponent', () => {
  let component: CSharpComponent;
  let fixture: ComponentFixture<CSharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSharpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
