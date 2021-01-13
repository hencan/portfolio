import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAdminReadComponent } from './projects-admin-read.component';

describe('ProjectsAdminReadComponent', () => {
  let component: ProjectsAdminReadComponent;
  let fixture: ComponentFixture<ProjectsAdminReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAdminReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAdminReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
