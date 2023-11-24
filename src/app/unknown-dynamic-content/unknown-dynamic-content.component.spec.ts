import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownDynamicContentComponent } from './unknown-dynamic-content.component';

describe('UnknownDynamicContentComponent', () => {
  let component: UnknownDynamicContentComponent;
  let fixture: ComponentFixture<UnknownDynamicContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnknownDynamicContentComponent]
    });
    fixture = TestBed.createComponent(UnknownDynamicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
