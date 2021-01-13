import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsAdminReadComponent } from './tutorials-admin-read.component';

describe('TutorialsAdminReadComponent', () => {
  let component: TutorialsAdminReadComponent;
  let fixture: ComponentFixture<TutorialsAdminReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsAdminReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsAdminReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
