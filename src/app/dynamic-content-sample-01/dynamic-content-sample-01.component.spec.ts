import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentSample01Component } from './dynamic-content-sample-01.component';

describe('DynamicContentSample01Component', () => {
  let component: DynamicContentSample01Component;
  let fixture: ComponentFixture<DynamicContentSample01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicContentSample01Component]
    });
    fixture = TestBed.createComponent(DynamicContentSample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
