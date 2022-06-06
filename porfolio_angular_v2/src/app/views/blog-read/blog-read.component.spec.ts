import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReadComponent } from './blog-read.component';

describe('BlogReadComponent', () => {
  let component: BlogReadComponent;
  let fixture: ComponentFixture<BlogReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
