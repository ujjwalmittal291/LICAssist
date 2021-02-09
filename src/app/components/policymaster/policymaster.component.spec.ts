import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicymasterComponent } from './policymaster.component';

describe('PolicymasterComponent', () => {
  let component: PolicymasterComponent;
  let fixture: ComponentFixture<PolicymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicymasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
