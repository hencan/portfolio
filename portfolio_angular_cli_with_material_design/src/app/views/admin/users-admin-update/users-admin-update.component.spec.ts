import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminUpdateComponent } from './users-admin-update.component';

describe('UsersAdminUpdateComponent', () => {
  let component: UsersAdminUpdateComponent;
  let fixture: ComponentFixture<UsersAdminUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAdminUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
