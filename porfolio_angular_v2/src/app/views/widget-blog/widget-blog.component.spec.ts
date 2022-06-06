import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBlogComponent } from './widget-blog.component';

describe('WidgetBlogComponent', () => {
  let component: WidgetBlogComponent;
  let fixture: ComponentFixture<WidgetBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
