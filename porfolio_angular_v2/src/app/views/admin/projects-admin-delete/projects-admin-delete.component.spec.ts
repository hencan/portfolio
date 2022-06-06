import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAdminDeleteComponent } from './projects-admin-delete.component';

describe('ProjectsAdminDeleteComponent', () => {
  let component: ProjectsAdminDeleteComponent;
  let fixture: ComponentFixture<ProjectsAdminDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAdminDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
