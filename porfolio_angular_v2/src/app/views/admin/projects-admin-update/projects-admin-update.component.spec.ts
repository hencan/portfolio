import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAdminUpdateComponent } from './projects-admin-update.component';

describe('ProjectsAdminUpdateComponent', () => {
  let component: ProjectsAdminUpdateComponent;
  let fixture: ComponentFixture<ProjectsAdminUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAdminUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
