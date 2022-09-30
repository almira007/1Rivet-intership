import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationJoinOperatorsComponent } from './combination-join-operators.component';

describe('CombinationJoinOperatorsComponent', () => {
  let component: CombinationJoinOperatorsComponent;
  let fixture: ComponentFixture<CombinationJoinOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationJoinOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinationJoinOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
