import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminDeleteComponent } from './users-admin-delete.component';

describe('UsersAdminDeleteComponent', () => {
  let component: UsersAdminDeleteComponent;
  let fixture: ComponentFixture<UsersAdminDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAdminDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
