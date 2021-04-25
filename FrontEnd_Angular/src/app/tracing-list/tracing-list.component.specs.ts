import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracingListComponent } from './tracing-list.component';

describe('TracingListComponent', () => {
  let component: TracingListComponent;
  let fixture: ComponentFixture<TracingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});