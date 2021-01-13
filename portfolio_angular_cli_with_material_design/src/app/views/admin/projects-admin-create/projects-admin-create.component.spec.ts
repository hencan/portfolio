import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAdminCreateComponent } from './projects-admin-create.component';

describe('ProjectsAdminCreateComponent', () => {
  let component: ProjectsAdminCreateComponent;
  let fixture: ComponentFixture<ProjectsAdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAdminCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
