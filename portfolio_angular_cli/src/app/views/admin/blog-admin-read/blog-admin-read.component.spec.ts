import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminReadComponent } from './blog-admin-read.component';

describe('BlogAdminReadComponent', () => {
  let component: BlogAdminReadComponent;
  let fixture: ComponentFixture<BlogAdminReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAdminReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
