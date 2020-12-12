import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsAdminUpdateComponent } from './tutorials-admin-update.component';

describe('TutorialsAdminUpdateComponent', () => {
  let component: TutorialsAdminUpdateComponent;
  let fixture: ComponentFixture<TutorialsAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
