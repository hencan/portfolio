import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminReadComponent } from './users-admin-read.component';

describe('UsersAdminReadComponent', () => {
  let component: UsersAdminReadComponent;
  let fixture: ComponentFixture<UsersAdminReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAdminReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
