import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTwoComponent } from './user-list-two.component';

describe('UserListTwoComponent', () => {
  let component: UserListTwoComponent;
  let fixture: ComponentFixture<UserListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
