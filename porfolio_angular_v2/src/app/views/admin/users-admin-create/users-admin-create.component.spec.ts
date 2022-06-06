import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminCreateComponent } from './users-admin-create.component';

describe('UsersAdminCreateComponent', () => {
  let component: UsersAdminCreateComponent;
  let fixture: ComponentFixture<UsersAdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAdminCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
