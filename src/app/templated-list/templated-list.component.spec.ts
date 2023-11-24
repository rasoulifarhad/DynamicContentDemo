import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedListComponent } from './templated-list.component';

describe('TemplatedListComponent', () => {
  let component: TemplatedListComponent;
  let fixture: ComponentFixture<TemplatedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatedListComponent]
    });
    fixture = TestBed.createComponent(TemplatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
