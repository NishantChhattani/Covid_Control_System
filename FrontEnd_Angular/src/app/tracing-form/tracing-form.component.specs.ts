import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracingFormComponent } from './tracing-form.component';

describe('TracingFormComponent', () => {
  let component: TracingFormComponent;
  let fixture: ComponentFixture<TracingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});