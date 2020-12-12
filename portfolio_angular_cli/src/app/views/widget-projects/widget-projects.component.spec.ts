import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProjectsComponent } from './widget-projects.component';

describe('WidgetProjectsComponent', () => {
  let component: WidgetProjectsComponent;
  let fixture: ComponentFixture<WidgetProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
