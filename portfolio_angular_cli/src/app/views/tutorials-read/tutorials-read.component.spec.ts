import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsReadComponent } from './tutorials-read.component';

describe('TutorialsReadComponent', () => {
  let component: TutorialsReadComponent;
  let fixture: ComponentFixture<TutorialsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
