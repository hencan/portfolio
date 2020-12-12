import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsAdminDeleteComponent } from './tutorials-admin-delete.component';

describe('TutorialsAdminDeleteComponent', () => {
  let component: TutorialsAdminDeleteComponent;
  let fixture: ComponentFixture<TutorialsAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsAdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
