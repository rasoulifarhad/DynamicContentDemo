import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentSample02Component } from './dynamic-content-sample-02.component';

describe('DynamicContentSample02Component', () => {
  let component: DynamicContentSample02Component;
  let fixture: ComponentFixture<DynamicContentSample02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicContentSample02Component]
    });
    fixture = TestBed.createComponent(DynamicContentSample02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
