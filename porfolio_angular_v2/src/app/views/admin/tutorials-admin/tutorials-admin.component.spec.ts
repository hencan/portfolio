import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsAdminComponent } from './tutorials-admin.component';

describe('TutorialsAdminComponent', () => {
  let component: TutorialsAdminComponent;
  let fixture: ComponentFixture<TutorialsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
