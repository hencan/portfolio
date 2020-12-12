import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminCreateComponent } from './blog-admin-create.component';

describe('BlogAdminCreateComponent', () => {
  let component: BlogAdminCreateComponent;
  let fixture: ComponentFixture<BlogAdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAdminCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
