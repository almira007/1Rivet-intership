import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorExampleComponent } from './behavior-example.component';

describe('BehaviorExampleComponent', () => {
  let component: BehaviorExampleComponent;
  let fixture: ComponentFixture<BehaviorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
