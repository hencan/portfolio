import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsAdminCreateComponent } from './tutorials-admin-create.component';

describe('TutorialsAdminCreateComponent', () => {
  let component: TutorialsAdminCreateComponent;
  let fixture: ComponentFixture<TutorialsAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsAdminCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
